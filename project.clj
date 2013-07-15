(defproject nwcljs "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [node-webkit-cljs "0.1.4"]
                 ]
  :plugins [[lein-cljsbuild "0.3.2"]]
  :cljsbuild {:builds [{:source-paths ["cljs"]
                        :incremental false
                        :compiler {
                                   :output-to "js/app.js"
                                   :externs ["vendor/bootstrap/js/bootstrap.min.js"]
                                   :optimizations :advanced
                                   :warnings true
                                   :pretty-print true}}]})

