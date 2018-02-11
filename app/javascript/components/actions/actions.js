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

function requestJobsByRole(role) {
  debugger
  return(
    {
      type: constants.REQUEST_JOBS_BY_ROLE,
      jobsByRole: {
        role: role
      }
    }
  );
}

function requestJobsByType(type) {
  return(
    {
      type: constants.REQUEST_JOBS_BY_TYPE,
      jobsByType: {
        type: type
      }
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

function fetchJobsByRole(role) {
  //return function(dispatch) {
  //  dispatch(requestJobsByRole(role))

  //  return fetch(`/jobs`)
  //    .then(
  //      response => response.json(),
  //      error => console.log('An error occurred.', error)
  //    )
  //    .then(json =>
  //      dispatch(receiveJobs(role, json))
  //    )
  //}
  return []
}

function shouldFetchJobsByRole(state, role) {
  const jobs = state.jobsByRole[role]
  if(!jobs) {
    return true
  } else if (jobs.isFetching) {
    return false
  } else {
    return jobs.didInvalidate
  }
}

function fetchJobsByRoleIfNeeded(role) {
  return (dispatch, getState) => {
    if(shouldFetchJobsByRole(getState(), role)) {
      return dispatch(fetchJobsByRole(role))
    }
  }
}

export { setActiveRole, constants, setActiveType, fetchJobsByRoleIfNeeded }
