//import fetch from 'cross-fetch'
import heyfamFetch from '../../helpers/heyfamFetch'

const constants = {
  SET_ACTIVE_ROLE: "SET_ACTIVE_ROLE",
  SET_ACTIVE_TYPE: "SET_ACTIVE_TYPE",
  INVALIDATE_REQUEST: "INVALIDATE_REQUEST",
  REQUEST_JOBS: "REQUEST_JOBS",
  RECEIVE_JOBS: "RECEIVE_JOBS",
  RECEIVE_FAVORITE_JOBS: "RECEIVE_FAVORITE_JOBS",
  REQUEST_FAVORITE_JOBS: "REQUEST_FAVORITE_JOBS",
  REQUEST_TOGGLE_FAVORITE_JOB: "REQUEST_TOGGLE_FAVORITE_JOB",
  RECEIVE_TOGGLE_FAVORITE_JOB: "RECEIVE_TOGGLE_FAVORITE_JOB"
}

//{
//  jobsByType: {
//    full_time: {
//      isFetching: false,
//      didInvalidate: false,
//      lastUpdated: 1439478405547,
//      fetchedPageCount: 1,
//      nextPageUrl,
//      items: []
//    },
//    part_time: {
//      isFetching: false,
//      didInvalidate: false,
//      lastUpdated: 1439478405547,
//      fetchedPageCount: 1,
//      nextPageUrl,
//      items: []
//    },
//    freelance: {
//      isFetching: false,
//      didInvalidate: false,
//      lastUpdated: 1439478405547,
//      fetchedPageCount: 1,
//      nextPageUrl,
//      items: []
//    }
//  },
//  jobsByRole: {
//    development: {
//      isFetching: false,
//      didInvalidate: false,
//      lastUpdated: 1439478405547,
//      fetchedPageCount: 1,
//      nextPageUrl,
//      items: []
//    },
//    design: {
//      isFetching: false,
//      didInvalidate: false,
//      lastUpdated: 1439478405547,
//      fetchedPageCount: 1,
//      nextPageUrl,
//      items: []
//    },
//    marketing: {
//      isFetching: false,
//      didInvalidate: false,
//      lastUpdated: 1439478405547,
//      fetchedPageCount: 1,
//      nextPageUrl,
//      items: []
//    }
//  }
//}

function requestJobs() {
  return(
    {
      type: constants.REQUEST_JOBS
    }
  );
}

function requestToggleFavoriteJob() {
  return(
    {
      type: constants.REQUEST_TOGGLE_FAVORITE_JOB
    }
  );
}

function receiveToggleFavoriteJob() {
  return(
    {
      type: constants.RECEIVE_TOGGLE_FAVORITE_JOB
    }
  );
}



function receiveFavoriteJobs(json = []) {
  return {
    type: constants.RECEIVE_FAVORITE_JOBS,
    favoriteJobs: json
  }
}

function requestFavoriteJobs(json = []) {
  return {
    type: constants.REQUEST_FAVORITE_JOBS,
    favoriteJobs: json
  }
}

function receiveJobs(json) {
  return {
    type: constants.RECEIVE_JOBS,
    jobs: json,
    receivedAt: Date.now()
  }
}

function setActiveRole(name) {
  return(
    {
      type: constants.SET_ACTIVE_ROLE,
      payload: {
        name: name
      }
    }
  );
}

function setActiveType(name) {
  return(
    {
      type: constants.SET_ACTIVE_TYPE,
      payload: {
        name: name
      }
    }
  );
}

function fetchJobs(state, options = {}) {
  return function(dispatch) {
    dispatch(requestJobs())
    const url = "/api/v1/jobs?"
    const queryParams = `job_type_name=${state.activeType}&job_role_name=${state.activeRole}`

    return heyfamFetch(url + queryParams, {}, options)
      .then(json =>
        dispatch(receiveJobs(json))
      )
  }
}

function fetchFavoriteJobs(state, options = {}) {
  return function(dispatch) {
    dispatch(requestFavoriteJobs())
    return heyfamFetch(`api/v1/favorite_jobs`, {}, options)
      .then(json =>
        dispatch(receiveFavoriteJobs(json))
      )
  }
}

function toggleFavoriteJob(job_id) {
  return function(dispatch) {
    dispatch(requestToggleFavoriteJob())
    return(heyfamFetch(
      `api/v1/favorite_jobs?job_id=${job_id}`,
      {},
      { method: 'POST' }
    ).then(json =>
      dispatch(receiveToggleFavoriteJob()))
  )}
}

function shouldFetchJobs(state) {
  if (state.jobs.isFetching) {
    return false
  } else {
    return true
  }
}

function shouldToggleFavoriteJob(state) {
  if (state.toggleFavoriteJob.isFetching) {
    return false
  } else {
    return true
  }
}

function fetchJobsIfNeeded() {
  return (dispatch, getState) => {
    if(shouldFetchJobs(getState())) {
      return dispatch(fetchJobs(getState()))
    }
  }
}

function toggleFavoriteJobIfNeeded(job_id) {
  return (dispatch, getState) => {
    if (shouldToggleFavoriteJob(getState())) {
      return dispatch(toggleFavoriteJob(job_id))
    }
  }
}

export {
  setActiveRole,
  constants,
  setActiveType,
  fetchJobsIfNeeded,
  fetchFavoriteJobs,
  toggleFavoriteJobIfNeeded
}
