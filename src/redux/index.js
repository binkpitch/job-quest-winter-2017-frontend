import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import testApi, { testApiEpic } from './testApi'

export const rootReducer = combineReducers({
  testApi
})

export const rootEpics = combineEpics(testApiEpic)
