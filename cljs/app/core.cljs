(ns app.core
  (:require [node-webkit.core :as nw]))

(nw/tray! {:title "My App"
           :icon "img/icon.png"
           :menu (nw/menu [{:label "Show..." :click #(.show (nw/window))}
                           {:type "separator"}
                           {:label "Quit" :click nw/quit}])})

(.on (nw/window) "close" #(.hide (nw/windows)))

(set! (.-onload js/window) 
      (let [a (.getElementById js/document "container")] 
        (set! (.-innerHTML a) "maomao")))
