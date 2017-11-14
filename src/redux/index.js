import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import deleteIssue, { deleteIssueEpic } from './deleteIssue'
import testApi, { testApiEpic } from './testApi'

export const rootReducer = combineReducers({
  deleteIssue,
  testApi
})

export const rootEpics = combineEpics(deleteIssueEpic, testApiEpic)
