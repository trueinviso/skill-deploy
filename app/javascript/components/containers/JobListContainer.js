//This is the container for the JobType and manages state

import { JobList } from '../components/JobBoard/JobList'
import { connect } from 'react-redux'
import { requestJobsByRole, requestJobsByType } from '../actions/actions'

const mapStateToProps = (state, ownProps) => {
  return {
    jobs: ownProps.jobs
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(filterJobs(ownProps.jobs))
    }
  }
}

const JobListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(JobList)

export default JobListContainer

