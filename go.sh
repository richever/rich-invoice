lein cljsbuild once
zip -r ../${PWD##*/}.nw *
mv ../${PWD##*/}.nw ./
open -n -a node-webkit ${PWD##*/}.nw
