import sanctuary from 'sanctuary'
import {env as flutureEnv} from 'fluture-sanctuary-types'
import {resolve} from 'fluture'
const S = sanctuary.create ({checkTypes: true, env: env.concat (flutureEnv)})

const {Maybe} = S;

const getPackageName = function (file) {
  return Future.node (function (done) { fs.readFile (file, 'utf8', done) })
  .pipe (Future.chain (Future.encase (JSON.parse)))
  .pipe (Future.map (function (x) { return x.name }))
}

getPackageName ('./test.txt')
  .pipe (Future.fork (console.error) (console.log))