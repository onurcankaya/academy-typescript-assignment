import { combineReducers } from 'redux'
import posts from './posts'

const reducers = {
  posts,
}

export default reducers

export const combinedReducers = combineReducers(reducers)
