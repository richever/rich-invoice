(ns app.core
  (:require [node-webkit.core :as nw]
            [enfocus.core :as ef]
            [enfocus.events :as event]
            [enfocus.effects :as effect]
            [app.invoices :as invoice])
  (:require-macros [enfocus.macros :as em]))

(nw/tray! {:title "My App"
           :icon "img/icon.png"
           :menu (nw/menu [{:label "Show..." :click #(.show (nw/window))}
                           {:type "separator"}
                           {:label "Quit" :click nw/quit}])})

(.on (nw/window) "close" #(.hide (nw/windows)))

(em/defaction clicked [msg]
  ["#container"] (ef/content msg))

(em/defaction bn_setup []
  ["#bn1"] (event/listen :click invoice/showInvoices)
  ["#bn2"] (event/listen :click invoice/createInvoice)
  ["#bn3"] (event/listen :click #(clicked "button 3 has been clicked."))
  ["#bn4"] (event/listen :click #(clicked "button 4 has been clicked."))
  ["#add_invoice"] (event/listen :click invoice/addInvoice)
  ["#reset_invoice"] (event/listen :click invoice/resetInvoice))

(set! (.-onload js/window)
      (do (bn_setup)))
