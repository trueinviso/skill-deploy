//import fetch from 'cross-fetch'

const constants = {
  SET_ACTIVE_ROLE: "SET_ACTIVE_ROLE",
  SET_ACTIVE_TYPE: "SET_ACTIVE_TYPE",
  INVALIDATE_REQUEST: "INVALIDATE_REQUEST",
  REQUEST_JOBS: "REQUEST_JOBS",
  RECEIVE_JOBS: "RECEIVE_JOBS"
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

function requestJobs(filter) {
  return(
    {
      type: constants.REQUEST_JOBS,
      filter: filter.replace(/ +/g, '_').toLowerCase()
    }
  );
}

function receiveJobs(filter, json) {
  return {
    type: constants.RECEIVE_JOBS,
    filter,
    jobs: [],
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

function fetchJobs(filter) {
  return function(dispatch) {
    dispatch(requestJobs(filter))
    dispatch(receiveJobs(filter, undefined))

    //return fetch(`/jobs`)
    //  .then(
    //    response => response.json(),
    //    error => console.log('An error occurred.', error)
    //  )
    //  .then(json =>
    //    dispatch(receiveJobs(filter, json))
    //  )
  }
}

function shouldFetchJobs(state, filter) {
  const jobs = state.jobs[filter]
  if(!jobs) {
    return true
  } else if (jobs.isFetching) {
    return false
  } else {
    return jobs.didInvalidate
  }
}

function fetchJobsIfNeeded(filter) {
  return (dispatch, getState) => {
    if(shouldFetchJobs(getState(), filter)) {
      return dispatch(fetchJobs(filter))
    }
  }
}

export { setActiveRole, constants, setActiveType, fetchJobsIfNeeded }
