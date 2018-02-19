import { constants } from './constants'
import heyfamFetch from '../../helpers/heyfamFetch'

const API = "/api/v1/jobs"

function fetchJobsIfNeeded() {
  return (dispatch, getState) => {
    if(shouldFetchJobs(getState())) {
      return dispatch(fetchJobs(getState()))
    }
  }
}

function shouldFetchJobs(state) {
  if(state.jobs.isFetching) {
    return false
  } else {
    return true
  }
}

function fetchJobs(state, options = {}) {
  const type = `job_type_name=${state.activeType}`
  const role = `job_role_name=${state.activeRole}`
  const url = `${API}?${type}&${role}`

  return function(dispatch) {
    dispatch(requestJobs())
    return heyfamFetch(url, {}, options)
      .then(json => dispatch(receiveJobs(json)))
  }
}

function requestJobs() {
  return {
    type: constants.REQUEST_JOBS
  }
}

function receiveJobs(json) {
  return {
    type: constants.RECEIVE_JOBS,
    jobs: json,
    receivedAt: Date.now()
  }
}

export {
  fetchJobsIfNeeded
}
