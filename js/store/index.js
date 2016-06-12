import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import devTools from 'remote-redux-devtools'

const longger = createLogger()

import reducers from '../reducers'

export default createStore(reducers, compose(applyMiddleware(thunk, longger), devTools({
  name: 'Android app', realtime: true,
  hostname: 'localhost', port: 8000
})))
