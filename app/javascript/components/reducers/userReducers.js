import { constants } from '../actions/constants'

const defaultState = {
  isFetching: false,
  lastUpdated: Date.now(),
  data: { thumbnail: "" }
}

function user(state = defaultState, action) {
  switch(action.type) {
    case constants.FETCHING_USER:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case constants.RECEIVE_USER:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.user,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export {
  user
}
