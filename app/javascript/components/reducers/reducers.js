import { constants } from '../actions/actions'

const initialState = {
  activeRole: "",
  activeType: "",
  isFetching: false,
  didInvalidate: false,
  jobs: []
}

function JobApp(state = initialState, action) {
  return {
    activeRole: activeRole(state, action),
    activeType: activeType(state, action),
    jobs: requestJobs(state, action)
  }
}

function activeRole(state = "", action) {
  const prevRole = state.activeRole

  switch(action.type) {
    case constants.SET_ACTIVE_ROLE:
      return prevRole != action.payload.name ? action.payload.name : ""
    default:
      return state.activeRole
  }
}

function activeType(state = "", action) {
  const prevType = state.activeType

  switch(action.type) {
    case constants.SET_ACTIVE_TYPE:
      return prevType != action.payload.name ? action.payload.name : ""
    default:
      return state.activeType
  }
}

function requestJobs(state = [], action) {
  switch(action.type) {
    case constants.REQUEST_JOBS:
    case constants.INVALIDATE_REQUEST:
    case constants.RECEIVE_JOBS:
      return Object.assign({}, state, {
        [action.filter]: jobs(state[action.filter], action)
      })
    default:
      return state
  }
}

function jobs(
  state = {
    isFetching: false,
    didInvalidate: false,
    jobs: []
  },
  action
) {
  switch(action.type) {
    case constants.INVALIDATE_REQUEST:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case constants.REQUEST_JOBS_BY:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case constants.RECEIVE_JOBS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.jobs,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export default JobApp
