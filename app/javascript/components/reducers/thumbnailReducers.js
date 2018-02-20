import { constants } from '../actions/constants'

const defaultState = {
  isFetching: false,
  lastUpdated: Date.now(),
  url: ""
}

function thumbnail(state = defaultState, action) {
  switch(action.type) {
    case constants.UPLOADING_THUMBNAIL:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case constants.DESTROYING_THUMBNAIL:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case constants.RECEIVE_THUMBNAIL:
      return Object.assign({}, state, {
        isFetching: false,
        url: action.thumbnail,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export {
  thumbnail
}
