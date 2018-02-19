import { constants } from './constants'

function setActiveNavLink(name) {
  return {
    type: constants.SET_ACTIVE_NAV_LINK,
    name: name
  }
}

export {
  setActiveNavLink
}

