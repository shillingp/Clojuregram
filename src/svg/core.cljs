(ns svg.core)

;; GAME SETTINGS
(def gapWidth 5)
(def tileSize 35)
(def gridStart (* 2 tileSize))
(def gridSize 10)
(def bias 0.75)
;; Scaling Bias
;; (def bias (.pow js/Math gridSize (* gridSize 1e-2)))
(def mouseState (atom false))
(def solGrid (atom []))


;; DEVELOPEMENT SETTINGS
(enable-console-print!)
(defn log [x]
  (.log js/console x))



;; VARIABLE DECLARATION
(declare doc)
(declare svg)
(declare nonogram)
(declare update)
(declare onWin)
(def math js/Math)



;; DOCUMENT FUNCTIONS
(defn length
  ;; Return length of given array
  [nodes]
  (.-length nodes))

(defn by-id
  ;; Get element by id
  ([id] (by-id id doc))
  ([id elem] (.getElementById elem (name id))))

(defn by-class
  ;; Get elements by class name
  ([class] (by-class class doc))
  ([class elem] (.getElementsByClassName elem (name class))))

(defn by-tag
  ;; Get elements by tag name
  ([tag] (by-tag tag doc))
  ([tag elem] (.getElementsByTagName elem (name tag))))



;; SCRIPT FUNCTIONS
;; UTILITIES
(defn random
  ;; Create a random number with bias
  [b]
  (.round math (.pow math (.random math) b)))

(defn setStyles
  ;; Set multiple styles from vectors
  [elem data]
  (doseq [[k v] data]
    (aset (.-style elem) k v)))

(defn setAttributes
  ;; Set multiple attributes from vector)
  [elem data]
  (doseq [[k v] data]
    (.setAttribute elem k v)))



;; DOCUMENT SETTINGS
(defn docSettings
  ;; Settings for the whole document
  []
  (.addEventListener doc "mousedown"
                     (fn [] (reset! mouseState true)))
  (.addEventListener doc "mouseup"
                     (fn [] (reset! mouseState false)))
  (.addEventListener (.-parentElement svg) "contextmenu"
                     (fn [e] (.preventDefault e)))
  (.addEventListener (by-id "svgBanner") "onclick"
                     (fn [] nonogram))
  (let [maxSize (+ gridStart (* gridSize (+ tileSize gapWidth)))]
    (setStyles svg {"maxHeight" maxSize "maxWidth" maxSize})
    (setAttributes svg
                   {"viewBox" (str "0,0," maxSize "," maxSize),
                    "preserveAspectRatio" "xMidYMid meet"})
    (aset (.-style (by-id "svgBanner")) "visibility" "hidden")))



;; GRID FORMATION
(defn createSVG
  ;; Create an SVG element
  [type]
  (.createElementNS doc "http://www.w3.org/2000/svg" type))

(defn drawTile
  ;; Create and populate tile element
  [x y sol]
  (let [tile (createSVG "rect")
        data {"x" (+ x gridStart),
              "y" (+ y gridStart),
              "width" tileSize,
              "height" tileSize,
              "sol" sol,
              "curr" 0,
              "flag" 0}]
    (setAttributes tile data)
    (.appendChild svg tile)))

(defn drawGrid
  ;; Create a full grid of tiles
  []
  (let [counter (atom 0)
        g gridSize]
    (doseq [y (range g) :while (< @counter (* g g))
            x (range g) :while (< @counter (* g g))]
      (swap! solGrid conj (random bias))
      (drawTile (* x (+ tileSize gapWidth))
                (* y (+ tileSize gapWidth))
                (get @solGrid @counter))
      (swap! counter inc))))

(defn clearGrid
  ;; Remove all elements within the SVG element.
  []
  (while (.-firstChild svg)
    (.removeChild svg (.-firstChild svg))))



;; TILE FUNCTIONS
(defn flagWrite
  ;; Fill a row or column with flags
  [a b]
  (dotimes [i (length a)]
    (if (= (.getAttribute b "flag") "0")
      (.setAttribute (aget a i) "flag" "1")
      (.setAttribute (aget a i) "flag" "0"))))

(defn toggleFlag
  ;; Flag the targeted tile
  []
  (let [a (.-target js/event)]
    (if (= "1" (.getAttribute a "curr"))
      (setAttributes a {"curr" 0 "flag" 1})
      (if (= "1" (.getAttribute a "flag"))
        (.setAttribute a "flag" 0)
        (.setAttribute a "flag" 1)))))

(defn toggleTile
  ;; Select the targeted tile
  []
  (let [a (.-target js/event)]
    (if (= "1" (.getAttribute a "curr"))
      (setAttributes a {"curr" 0 "flag" 0})
      (.setAttribute a "curr" 1)))
  (update))



;; CLUE CREATION
(defn horzText
 ;; Get text from the horizontal tiles
  [rect]
  (let [textList (.querySelectorAll svg (str "rect[x='" (.getAttribute rect "x") "']"))
        a (atom [])]
    (dotimes [i gridSize]
      (if (.hasAttribute (aget textList i) "sol")
        (swap! a conj
               (.getAttribute
                (aget textList i)
                "sol"))))
    (.addEventListener (.-parentElement rect) "click"
                         (fn [] (flagWrite textList rect)))
    @a))

(defn vertText
  ;; Get text from vertical tiles
  [rect]
  (let [textList (.querySelectorAll svg (str "rect[y='" (.getAttribute rect "y") "']"))
        a (atom [])]
    (dotimes [i gridSize]
      (if (.hasAttribute (aget textList i) "sol")
        (swap! a conj
               (.getAttribute
                (aget textList i)
                "sol"))))
    (.addEventListener (.-parentElement rect) "click"
                       (fn [] (flagWrite textList rect)))
    @a))

(defn islandCalc
  ;; Calculate the islands in given array
  [a]
  (let [n (atom 0)
        m (atom [])]
      (dotimes [i (count a)]
        (if (= "1" (get a i))
          (swap! n inc))
        (if (or (and (= "0" (get a i))
                     (> @n 0))
                (and (= i (- (count a) 1))
                     (> @n 0)))
          ((swap! m conj @n)
           (reset! n 0))))
    (if (= "0" (count @m))
      (swap! m conj 0))
    @m))

(defn solTile
  ;; Create solution clue boxes
  [x y deg]
  (let [group (.appendChild svg (createSVG "g"))
        rect (.appendChild group (createSVG "rect"))
        text (.appendChild group (createSVG "text"))]
    (setAttributes rect
                   {"x" x,
                    "y" y,
                    "width" (- (* tileSize 2) gapWidth),
                    "height" tileSize
                    "transform" (str "rotate(" deg "," x ",0)"),
                    "flag" 0})
    (setAttributes text
                   {"x" (+ x gapWidth),
                    "y" (+ y gapWidth (/ tileSize 2)),
                    "transform" (str "rotate(" deg "," x ",0)")})
    (if (= "0" (.getAttribute rect "x"))
      (set! (.-textContent text) (islandCalc (vertText rect)))
      (set! (.-textContent text) (islandCalc (horzText rect))))))

(defn writeClues
  ;; Create groups and transform to fit
  []
  (let [size (fn [a] (+ (* a (+ gapWidth tileSize)) gridStart))]
    (dotimes [i gridSize]
      (solTile (size i) (- tileSize) 90)
      (solTile  0 (size i) 0))))



;; SCORE FUNCTION
(defn update
  ;; Function to check for win situation when a selectionis changed
  []
  (let [grid (.querySelectorAll doc "rect[curr]")
        currGrid (atom [])]
    (dotimes [i (alength grid)]
      (swap! currGrid conj
             (->
              (.getAttribute (aget grid i) "curr")
              (js/parseInt))))
    (if (= @currGrid @solGrid)
      (onWin))))

(defn onWin
  ;; Function called when game is won (output)
  []
  (log "Yay"))

;; MOUSE FUNCTIONS
(defn mouseClick
  ;; Routing mouse events to seperate functions
  []
  (if (= 0 (.-button js/event))
    (toggleTile)
    (toggleFlag)))

(defn mouseDrag
  ;; Mouse swept over tiles will be targeted
  []
  (if (and (= @mouseState true)
           (= 0 (.-button js/event)))
    (toggleTile))
  (if (and (= @mouseState true)
           (= 2 (.-button js/event)))
    (toggleFlag)))

(defn addEvents
  ;; Add all mouse event listeners for grid
  []
  (let [grid (.querySelectorAll doc "svg>rect")]
    (dotimes [i (length grid)]
      (.addEventListener (aget grid i) "mousedown" mouseClick)
      (.addEventListener (aget grid i) "mouseover" mouseDrag))))



;; VARIABLE DEFINITION
(def doc js/document)                 ;; HTML document DOM element
(def svg (by-id "svgElement"))        ;; Game SVG element



;; GAME MANAGER
(defn nonogram
  ;; Game controller/initialisation
  []
  (docSettings)
  (clearGrid)
  (drawGrid)
  (writeClues)
  (addEvents))


(nonogram)
