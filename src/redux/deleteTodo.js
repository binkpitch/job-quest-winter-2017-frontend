import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/takeUntil'
import 'rxjs/add/observable/of'

// actions
export const REQUEST = 'my-app/issue/REQUEST'
export const SUCCESS = 'my-app/issue/SUCCESS'
export const FAILURE = 'my-app/issue/FAILURE'
export const CLEAR = 'my-app/issue/CLEAR'

// reducers
export default function reducer (state = {}, action) {
  switch (action.type) {
    case REQUEST:
      return { ...state, isFetching: true }
    case SUCCESS:
      return { ...state, done: true, isFetching: false }
    case FAILURE:
      return { ...state, error: action.error, isFetching: false }
    case CLEAR:
      return { ...state, isFetching: false, done: null, error: null }
    default:
      return state
  }
}

// action creators
export function requestDeleteIssue (_id) {
  return { type: REQUEST, _id }
}
export function successDeleteIssue (response) {
  return { type: SUCCESS, response }
}
export function failureDeleteIssue (error) {
  return { type: FAILURE, error }
}
export const actionCreators = {
  requestDeleteIssue,
  successDeleteIssue,
  failureDeleteIssue
}

// side effects
const url = 'http://localhost:3001'
const method = 'DELETE'

export function issueEpic (action$, store, { ajax }) {
  return action$.ofType(REQUEST)
    .switchMap(action =>
      ajax({ url, method, body: { _id: action._id } })
        .map(data => successDeleteIssue(data.response))
        .catch(error => failureDeleteIssue(error.name))
    )
}
