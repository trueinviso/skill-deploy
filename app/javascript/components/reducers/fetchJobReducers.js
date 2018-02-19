import { constants } from '../actions/constants'

const defaultState = {
  isFetching: false,
  lastUpdated: Date.now(),
  items: []
}

function jobs(state = defaultState, action) {
  switch(action.type) {
    case constants.REQUEST_JOBS:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case constants.RECEIVE_JOBS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.jobs,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export {
  jobs
}
