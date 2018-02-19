import { constants } from './constants'

function setActiveRole(name) {
  return {
    type: constants.SET_ACTIVE_ROLE,
    payload: {
      name: name
    }
  }
}

function setActiveType(name) {
  return {
    type: constants.SET_ACTIVE_TYPE,
    payload: {
      name: name
    }
  }
}

export {
  setActiveRole,
  setActiveType
}

