//This is the container for the JobType and manages state

import { JobList } from '../components/JobBoard/JobList'
import { connect } from 'react-redux'
import { setActiveRole } from '../actions/actions'

const mapStateToProps = (state, ownProps) => {
  return {
    jobs: state.jobs.items || []
  }
}

const JobListContainer = connect(
  mapStateToProps
)(JobList)

export default JobListContainer

