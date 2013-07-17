(ns app.core
  (:require [node-webkit.core :as nw]
            [enfocus.core :as ef]
            [enfocus.events :as event]
            [enfocus.effects :as effect])
  (:require-macros [enfocus.macros :as em]))

(nw/tray! {:title "My App"
           :icon "img/icon.png"
           :menu (nw/menu [{:label "Show..." :click #(.show (nw/window))}
                           {:type "separator"}
                           {:label "Quit" :click nw/quit}])})

(.on (nw/window) "close" #(.hide (nw/windows)))

(def db (js/PouchDB. "richdb"))

(defn addInvoice []
  (let [invoice (js-obj "_id" (.toISOString (js/Date.))
                        "price" 10.01)]
   (.put db invoice (fn [err result] (if-not err
                                       (.log js/console "Successfully posted an invoice!")
                                       (.log js/console (str "Failed:" err)))))))
(addInvoice)

(defn home_pg []
  (ef/at js/document
         ["#container"] (ef/content "Hello world!")))


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
