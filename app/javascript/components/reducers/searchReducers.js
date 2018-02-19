import { constants } from '../actions/constants'

function search(state="", action) {
  switch(action.type) {
    case constants.SET_SEARCH:
      return action.query
    default:
      return state
  }
}

export {
  search
}
