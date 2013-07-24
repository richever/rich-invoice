(ns app.invoices
  (:require [enfocus.core :as ef]
            [enfocus.events :as event]
            [enfocus.effects :as effect]
            [clojure.string :as s])
  (:require-macros [enfocus.macros :as em]))

(defn addInvoice []
  (let [db (js/PouchDB. "richdb")
        inputs (ef/from js/document
                        :itemname ["#itemname"] (ef/get-prop :value)
                        :totalprice ["#totalprice"] (ef/get-prop :value))
        invoice (js-obj "_id" (str (.getTime (js/Date.)))
                        "itemname" (:itemname inputs)
                        "totalprice" (:totalprice inputs))]
   (.put db invoice (fn [err result] (if-not err
                                       (showInvoices)
                                       (.log js/console (str "Failed:" err)))))))

(defn delInvoice [id]
  (let [db (js/PouchDB. "richdb")]
    (.get db id (fn [err doc] 
                  (.remove db doc #(showInvoices))))))

(defn resetInvoice []
  (ef/at js/document 
         ["#quantity"] (ef/set-prop :value "")
         ["#unitprice"] (ef/set-prop :value "")
         ["#totalprice"] (ef/set-prop :value "")
         ["#comment"] (ef/set-prop :value "")
         ["#itemname"] (ef/set-prop :value "")))

(defn createInvoice [] 
  (ef/at js/document 
         ["#container"] (ef/content (ef/html (list 
                                                 [:div.row-fluid [:div.span2.offset2 "Item name:"] [:input#itemname {:type "text"}]] 
                                                 [:div.row-fluid [:div.span2.offset2 "Item quantity:"] [:input#quantity {:type "text" :value 0}]] 
                                                 [:div.row-fluid [:div.span2.offset2 "Unit price:"] [:input#unitprice {:type "text" :value 0}]] 
                                                 [:div.row-fluid [:div.span2.offset2 "Total price:"] [:input#totalprice {:type "text" :value 0}]] 
                                                 [:div.row-fluid [:div.span2.offset2 "Comments:"] [:input#comment {:type "text"}]] 
                                                 [:div.row-fluid [:div#add_invoice.span2.offset2.bn "Create"] [:div#reset_invoice.span2.bn "Reset"]]))) 
         ["#quantity"] (event/listen :change 
                                     #(let [inputs (ef/from js/document 
                                                             :quantity ["#quantity"] (ef/get-prop :value)
                                                             :unitprice ["#unitprice"] (ef/get-prop :value))] 
                                         (ef/at ["#totalprice"] (ef/set-prop :value (str (* (:quantity inputs) (:unitprice inputs)))))))
         ["#unitprice"] (event/listen :change 
                                      #(let [inputs (ef/from js/document 
                                                             :quantity ["#quantity"] (ef/get-prop :value)
                                                             :unitprice ["#unitprice"] (ef/get-prop :value))] 
                                         (ef/at ["#totalprice"] (ef/set-prop :value (str (* (:quantity inputs) (:unitprice inputs)))))))
         ["#add_invoice"] (event/listen :click addInvoice) 
         ["#reset_invoice"] (event/listen :click resetInvoice)))

(defn showInvoices []
  (let [db (js/PouchDB. "richdb")]
  (do (ef/at js/document ["#container"] (ef/content) [:h2 "invoices:"]) 
      (ef/at js/document ["#container"] (ef/append) [:div.row-fluid 
                                                        [:div.span2 "Item name"] 
                                                        [:div.span2 "Item price"] 
                                                        [:div.span2 "delete"]])
      (.query db
          (js-obj "map" (fn [doc] (js/emit (.-_id doc) [:div.row-fluid 
                                                        [:div.span2 (.-itemname doc)] 
                                                        [:div.span2 (.-totalprice doc)] 
                                                        [:div {:id (str "del_" (.-_id doc)) :class "span2 bn"} "delete"]]))
                  "reduce" false)
          (fn [err results]
            (if-not err
              (doseq [result (.-rows results)]
                (ef/at js/document 
                       ["#container"] (ef/append (ef/html (.-value result))) 
                       [(str "#del_" (.-key result))] (event/listen :click #(delInvoice (.-key result)))))))))))
