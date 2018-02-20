import { constants } from './constants'
import heyfamFetch from '../../helpers/heyfamFetch'

const API = "/api/v1/user"

function fetchUser() {
  return (dispatch, getState) => {
    if(!fetching(getState())) {
      return dispatch(sendFetch(getState()))
    }
  }
}

function fetching(state) {
  if(state.user.isFetching) {
    return true
  } else {
    return false
  }
}

function sendFetch(state) {
  return function(dispatch) {
    dispatch(fetchingUser())
    return(
      heyfamFetch(API, {})
        .then(json => dispatch(receiveUser(json)))
    );
  }
}

function fetchingUser() {
  return {
    type: constants.FETCHING_USER
  }
}

function receiveUser(json) {
  return {
    type: constants.RECEIVE_USER,
    user: json,
    receivedAt: Date.now()
  }
}

export {
  fetchUser
}
