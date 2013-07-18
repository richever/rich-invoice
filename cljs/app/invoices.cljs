(ns app.invoices
  (:require [enfocus.core :as ef]
            [enfocus.events :as event]
            [enfocus.effects :as effect])
  (:require-macros [enfocus.macros :as em]))

(defn createInvoice []
  (ef/at js/document ["#container"]
         (ef/content (ef/html (list
                       [:div.row-fluid [:div.span2.offset2 "Item name:"] [:input#itemname {:type "text"}]]
                       [:div.row-fluid [:div.span2.offset2 "Item quantity:"] [:input#quantity {:type "text"}]]
                       [:div.row-fluid [:div.span2.offset2 "Unit price:"] [:input#unitprice {:type "text"}]]
                       [:div.row-fluid [:div.span2.offset2 "Total price:"] [:input#totalprice {:type "text"}]]
                       [:div.row-fluid [:div.span2.offset2 "Comments:"] [:input#comment {:type "text"}]]
                       [:div.row-fluid [:div#add_invoice.span2.offset2 "Create"] [:div#reset_invoice.span2 "Reset"]])))))

(defn addInvoice []
  (let [db (js/PouchDB. "richdb")
        invoice (js-obj "_id" (.toISOString (js/Date.)) 
                        "price" 10.01)]
   (.put db invoice (fn [err result] (if-not err
                                       (.log js/console "Successfully posted an invoice!")
                                       (.log js/console (str "Failed:" err)))))))
(defn resetInvoice []
  )

(defn showInvoices []
  (let [db (js/PouchDB. "richdb")]
  (do (ef/at js/document ["#container"] (ef/content) [:h2 "invoices:"])
      (.query db
          (js-obj "map" (fn [doc] (js/emit (.-price doc) [:div.row-fluid [:div.span2 (.-price doc)] [:div.span4 (.-_id doc)]]))
                  "reduce" false)
          (fn [err results]
            (if-not err
              (doseq [result (.-rows results)]
                (ef/at js/document ["#container"] (ef/append (ef/html (.-value result)))))))))))

