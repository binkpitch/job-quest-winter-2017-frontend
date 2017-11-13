import { createStore, applyMiddleware } from 'redux'
import { rootReducer, rootEpics } from '.'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import { createEpicMiddleware } from 'redux-observable'
import { ajax } from 'rxjs/observable/dom/ajax'

const epicMiddleware = createEpicMiddleware(rootEpics, {
  dependencies: { ajax }
})

const middleware = process.env.NODE_ENV !== 'production'
  // development
  ? [reduxImmutableStateInvariant(), epicMiddleware]
  // production
  : [epicMiddleware]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
