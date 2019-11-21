import { createStore } from 'redux'
import { combinedReducers } from './reducers'

export const setupStore = () => {
  const store = createStore(combinedReducers)

  store.subscribe(() => console.log(store.getState()))

  return store
}
