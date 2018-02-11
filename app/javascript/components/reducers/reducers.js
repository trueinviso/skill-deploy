import { constants } from '../actions/actions'

const initialState = {
  activeRole: "",
  activeType: ""
}

function JobApp(state = initialState, action) {
  return {
    activeRole: activeRole(state, action),
    activeType: activeType(state, action)
  }
}

function activeRole(state = {}, action) {
  switch(action.type) {
    case constants.SET_ACTIVE_ROLE:
      return action.payload.name !== state.activeRole ? action.payload.name : ""
    default:
      return state.activeRole
  }
}

function activeType(state = {}, action) {
  switch(action.type) {
    case constants.SET_ACTIVE_TYPE:
      return action.payload.name !== state.activeType ? action.payload.name : ""
    default:
      return state.activeType
  }
}

export default JobApp
