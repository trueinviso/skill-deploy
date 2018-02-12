//This is the container for the JobType and manages state

import { JobList } from '../components/JobBoard/JobList'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return {
    jobs: state.jobs.items,
    showSpinner: state.jobs.isFetching,
    favorites: state.favoriteJobs.items
  }
}

const JobListContainer = connect(
  mapStateToProps
)(JobList)

export default JobListContainer

