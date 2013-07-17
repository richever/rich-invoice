(defproject nwcljs "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [node-webkit-cljs "0.1.4"]
                 [crate "0.2.4"]
                 [enfocus "2.0.0-SNAPSHOT"]]
  :plugins [[lein-cljsbuild "0.3.2"]]
  :cljsbuild {:builds [{:source-paths ["cljs"]
                        :incremental false
                        :compiler {
                                   :output-to "js/app.js"
                                   :externs ["externs.js"]
                                   :optimizations :whitespace
                                   :warnings true
                                   :pretty-print true}}]})
