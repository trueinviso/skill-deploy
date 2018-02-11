import { constants } from '../actions/actions'

const initialState = {
  activeRole: "",
  activeType: "",
  jobs: []
}

function JobApp(state = initialState, action) {
  return {
    activeRole: activeRole(state, action),
    activeType: activeType(state, action),
    jobsByRole: requestJobsByRole(state, action)
  }
}

function activeRole(state = initialState, action) {
  const prevRole = state.activeRole

  switch(action.type) {
    case constants.SET_ACTIVE_ROLE:
      return prevRole != action.payload.name ? action.payload.name : ""
    default:
      return state.activeRole
  }
}

function activeType(state = initialState, action) {
  const prevType = state.activeType

  switch(action.type) {
    case constants.SET_ACTIVE_TYPE:
      return prevType != action.payload.name ? action.payload.name : ""
    default:
      return state.activeType
  }
}

function requestJobsByRole(state = intialState, action) {
  switch(action.type) {
    case constants.REQUEST_JOBS_BY_ROLE,
    case constants.INVALIDATE_REQUEST,
    case constants.RECEIVE_JOBS,
      return Object.assign({}, state, {
        [action.jobsByRole.role]: jobs(state[action.jobsByRole.role], action)
      })
    default:
      return state
  }
}

function requestJobsByType(state = intialState, action) {
  switch(action.type) {
    case constants.REQUEST_JOBS_BY_TYPE:
      return action.payload.jobs
    default:
      return state.jobs
  }
}

function jobs(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch(action.type) {
    case INVALIDATE_REQUEST:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_JOBS_BY_ROLE:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_JOBS:
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
