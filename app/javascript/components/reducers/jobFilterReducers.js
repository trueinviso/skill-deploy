import { constants } from '../actions/constants'

function activeRole(state="", action) {
  switch(action.type) {
    case constants.SET_ACTIVE_ROLE:
      return state != action.payload.name ? action.payload.name : ""
    default:
      return state
  }
}

function activeType(state="", action) {
  switch(action.type) {
    case constants.SET_ACTIVE_TYPE:
      return state != action.payload.name ? action.payload.name : ""
    default:
      return state
  }
}

export {
  activeRole,
  activeType
}
