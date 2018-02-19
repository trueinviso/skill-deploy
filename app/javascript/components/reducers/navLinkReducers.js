import { constants } from '../actions/constants'

function activeNavLink(state="", action) {
  switch(action.type) {
    case constants.SET_ACTIVE_NAV_LINK:
      return action.name
    default:
      return state
  }
}

export {
  activeNavLink
}
