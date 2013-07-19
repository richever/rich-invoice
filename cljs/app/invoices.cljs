(ns app.invoices
  (:require [enfocus.core :as ef]
            [enfocus.events :as event]
            [enfocus.effects :as effect])
  (:require-macros [enfocus.macros :as em]))

(defn addInvoice []
  (let [db (js/PouchDB. "richdb")
        inputs (ef/from js/document
                        :itemname ["#itemname"] (ef/get-prop :value)
                        :totalprice ["#totalprice"] (ef/get-prop :value))
        invoice (js-obj "_id" (.toISOString (js/Date.)) 
                        "itemname" (:itemname inputs)
                        "totalprice" (:totalprice inputs))]
   (.put db invoice (fn [err result] (if-not err
                                       (.log js/console "Successfully posted an invoice!")
                                       (.log js/console (str "Failed:" err)))))))

(defn resetInvoice []
  (ef/at js/document 
         ["#quantity"] (ef/set-prop :value "")
         ["#unitprice"] (ef/set-prop :value "")
         ["#totalprice"] (ef/set-prop :value "")
         ["#comment"] (ef/set-prop :value "")
         ["#itemname"] (ef/set-prop :value "")))

(em/defaction bn_events []
  ["#add_invoice"] (event/listen :click addInvoice)
  ["#reset_invoice"] (event/listen :click resetInvoice))

(defn createInvoice []
  (do
    (ef/at js/document ["#container"] 
           (ef/content (ef/html (list
                       [:div.row-fluid [:div.span2.offset2 "Item name:"] [:input#itemname {:type "text"}]]
                       [:div.row-fluid [:div.span2.offset2 "Item quantity:"] [:input#quantity {:type "text"}]]
                       [:div.row-fluid [:div.span2.offset2 "Unit price:"] [:input#unitprice {:type "text"}]]
                       [:div.row-fluid [:div.span2.offset2 "Total price:"] [:input#totalprice {:type "text"}]]
                       [:div.row-fluid [:div.span2.offset2 "Comments:"] [:input#comment {:type "text"}]]
                       [:div.row-fluid [:div#add_invoice.span2.offset2 "Create"] [:div#reset_invoice.span2 "Reset"]]))))
    (bn_events)))

(defn showInvoices []
  (let [db (js/PouchDB. "richdb")]
  (do (ef/at js/document ["#container"] (ef/content) [:h2 "invoices:"])
      (.query db
          (js-obj "map" (fn [doc] (js/emit (.-_id doc) [:div.row-fluid [:div.span2 (.-itemname doc)] [:div.span2 (.-totalprice doc)] [:div.span2 (.-_id doc)]]))
                  "reduce" false)
          (fn [err results]
            (if-not err
              (doseq [result (.-rows results)]
                (ef/at js/document ["#container"] (ef/append (ef/html (.-value result)))))))))))

