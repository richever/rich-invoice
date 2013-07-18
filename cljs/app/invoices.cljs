(ns app.invoices
  (:require [enfocus.core :as ef]
            [enfocus.events :as event]
            [enfocus.effects :as effect]
            [crate.core :as crate])
  (:use-macros [crate.def-macros :only [defpartial]])
  (:require-macros [enfocus.macros :as em]))

(def db (js/PouchDB. "richdb"))

(defn addInvoice []
  (let [invoice (js-obj "_id" (.toISOString (js/Date.)) 
                        "price" 10.01)]
   (.put db invoice (fn [err result] (if-not err
                                       (.log js/console "Successfully posted an invoice!")
                                       (.log js/console (str "Failed:" err)))))))
;(addInvoice)

(defn showInvoices []
  (.allDocs db (js-obj "include_docs" true
                       "descending" true)
            (fn [err doc] (if-not err
                            (.log js/console (.-rows doc))
                            (.log js/console err)))))
;(showInvoices)

(.query db
        (js-obj "map" (fn [doc] (js/emit (.-price doc) [:div.row-fluid [:div.span2 (.-price doc)] [:div.span4 (.-_id doc)]]))
                "reduce" false)
        (fn [err results]
          (if-not err
            (doseq [result (.-rows results)]
              ;(.log js/console (crate/html (.-value result)))))))
              (ef/at js/document ["#container"] (ef/after (crate/html (.-value result))))))))


(defpartial invoices []
  [:div "yo"])
