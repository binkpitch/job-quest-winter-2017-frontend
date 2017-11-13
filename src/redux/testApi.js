import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/takeUntil'
import 'rxjs/add/observable/of'

const url = 'https://jsonplaceholder.typicode.com/posts/1'
const method = 'GET'

// actions
export const REQUEST = 'my-app/testApi/REQUEST'
export const SUCCESS = 'my-app/testApi/SUCCESS'
export const FAILURE = 'my-app/testApi/FAILURE'
export const CLEAR = 'my-app/testApi/CLEAR'

// reducers
export default function reducer (state = {}, action) {
  switch (action.type) {
    case REQUEST:
      return { ...state, isFetching: true }
    case SUCCESS:
      return { ...state, response: action.response, isFetching: false }
    case FAILURE:
      return { ...state, error: action.error, isFetching: false }
    case CLEAR:
      return { ...state, isFetching: false, response: null, error: null }
    default:
      return state
  }
}

// action creators
export function requestTestApi () {
  return { type: REQUEST }
}
export function successTestApi (response) {
  return { type: SUCCESS, response }
}
export function failureTestApi (error) {
  return { type: FAILURE, error }
}
export function clearTestApi () {
  return { type: CLEAR }
}
export const actionCreators = {
  requestTestApi,
  successTestApi,
  failureTestApi,
  clearTestApi
}

// side effects
export function testApiEpic (action$, store, { ajax }) {
  return action$.ofType(REQUEST)
    .switchMap(action =>
      ajax({ url, method })
        .map(data => successTestApi(data.response))
        .catch(error => Observable.of(failureTestApi(error.name)))
        .takeUntil(action$.ofType(CLEAR))
    )
}
