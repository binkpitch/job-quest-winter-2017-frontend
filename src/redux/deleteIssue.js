import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/takeUntil'
import 'rxjs/add/observable/of'

// actions
export const REQUEST = 'my-app/deleteIssue/REQUEST'
export const SUCCESS = 'my-app/deleteIssue/SUCCESS'
export const FAILURE = 'my-app/deleteIssue/FAILURE'
export const CLEAR = 'my-app/deleteIssue/CLEAR'

// reducers
export default function reducer (state = {}, action) {
  switch (action.type) {
    case REQUEST:
      return { ...state, isFetching: true }
    case SUCCESS:
      return { ...state, done: true, isFetching: false }
    case FAILURE:
      return { ...state, error: action.error, isFetching: false, done: false }
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
export function deleteIssueEpic (action$, store, { ajax }) {
  return action$.ofType(REQUEST)
    .switchMap(action =>
      ajax({ url: `http://localhost:3001/rest/todo/${action._id}`, method: 'delete', body: { _id: action._id } })
        .map(data => successDeleteIssue(data.response))
        .catch(error => failureDeleteIssue(error.name))
    )
}
