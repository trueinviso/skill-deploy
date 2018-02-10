import { createStore } from 'redux'
import jobApp from '../reducers/reducers'
import { setActiveRole, setActiveType } from '../actions/actions'

export let store = createStore(jobApp, window.STATE_FROM_SERVER)
console.log(store.getState())

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
store.dispatch(setActiveRole("Development"))
store.dispatch(setActiveType("Full Time"))
store.dispatch(setActiveRole("Design"))
