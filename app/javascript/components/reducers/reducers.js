import { constants } from '../actions/actions'
import { combineReducers } from 'redux'

//const initialState = {
//  activeRole: "",
//  activeType: "",
//  favoriteJobs: {
//    isFetchingFavorites: false,
//    lastUpdated: Date.now(),
//    items: []
//  },
//  jobs: {
//    isFetching: false,
//    didInvalidate: false,
//    lastUpdated: Date.now(),
//    items: []
//  }
//}

function activeRole(state = "", action) {
  switch(action.type) {
    case constants.SET_ACTIVE_ROLE:
      return state != action.payload.name ? action.payload.name : ""
    default:
      return state
  }
}

function activeType(state = "", action) {
  switch(action.type) {
    case constants.SET_ACTIVE_TYPE:
      return state != action.payload.name ? action.payload.name : ""
    default:
      return state
  }
}

function toggleFavoriteJob(state = { isFetching: false }, action) {
  switch(action.type) {
    case constants.REQUEST_TOGGLE_FAVORITE_JOB:
      return Object.assign({}, state, {
        isFetching: true
      })
    case constants.RECEIVE_TOGGLE_FAVORITE_JOB:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}

function favoriteJobs(state = {
    isFetching: false,
    lastUpdated: Date.now(),
    items: []
  }, action)
  {
    switch(action.type) {
      case constants.REQUEST_FAVORITE_JOBS:
        return Object.assign({}, state, {
          isFetching: true
        })
      case constants.RECEIVE_FAVORITE_JOBS:
        debugger
        return Object.assign({}, state, {
          isFetching: false,
          items: action.favoriteJobs,
          lastUpdated: action.receivedAt
        })
      default:
        return state
    }
}

function jobs(state = {
    didInvalidate: false,
    isFetching: false,
    lastUpdated: Date.now(),
    items: []
  }, action)
  {
    switch(action.type) {
      case constants.REQUEST_JOBS:
        return Object.assign({}, state, {
          isFetching: true,
          didInvalidate: false
        })
      case constants.INVALIDATE_REQUEST:
        return Object.assign({}, state, {
          didInvalidate: true
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

const JobApp = combineReducers({
  activeRole,
  activeType,
  jobs,
  favoriteJobs,
  toggleFavoriteJob
})

export default JobApp
