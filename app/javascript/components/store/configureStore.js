import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import JobApp from '../reducers/reducers'

const loggerMiddleware = createLogger()

function configureStore(preloadedState) {
  return createStore(
    JobApp,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}

export default configureStore
