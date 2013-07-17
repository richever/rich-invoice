(ns app.core
  (:require [node-webkit.core :as nw]
            [enfocus.core :as ef]
            [enfocus.events :as event]
            [enfocus.effects :as effect]
            [crate.core :as crate])
  (:use [app.invoices :only [invoices]])
  (:use-macros [crate.def-macros :only [defpartial]])
  (:require-macros [enfocus.macros :as em]))

(nw/tray! {:title "My App"
           :icon "img/icon.png"
           :menu (nw/menu [{:label "Show..." :click #(.show (nw/window))}
                           {:type "separator"}
                           {:label "Quit" :click nw/quit}])})

(.on (nw/window) "close" #(.hide (nw/windows)))

(defn home_pg []
  (ef/at js/document
         ["#container"] (ef/content (invoices))))


(em/defaction clicked [msg]
  ["#container"] (ef/content msg))

(em/defaction bn_setup []
  ["#bn1"] (event/listen :click #(clicked "button 1 has been clicked."))
  ["#bn2"] (event/listen :click #(clicked "button 2 has been clicked."))
  ["#bn3"] (event/listen :click #(clicked "button 3 has been clicked."))
  ["#bn4"] (event/listen :click #(clicked "button 4 has been clicked.")))

(set! (.-onload js/window)
      (do (home_pg)
          (bn_setup)))
