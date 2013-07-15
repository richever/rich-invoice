(ns app.core
  (:require [node-webkit.core :as nw]
            [enfocus.core :as ef]
            [enfocus.events :as events]
            [enfocus.effects :as effects])
  (:require-macros [enfocus.macros :as em]))

(nw/tray! {:title "My App"
           :icon "img/icon.png"
           :menu (nw/menu [{:label "Show..." :click #(.show (nw/window))}
                           {:type "separator"}
                           {:label "Quit" :click nw/quit}])})

(.on (nw/window) "close" #(.hide (nw/windows)))

(set! (.-onload js/window) 
      (let [a (.getElementById js/document "container")] 
        (set! (.-innerHTML a) "maomao")))

(defn start []
  (ef/at js/document
         ["body"] (ef/content "Hello world!")))

(start)
