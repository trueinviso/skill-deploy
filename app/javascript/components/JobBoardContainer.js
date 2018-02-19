import { JobBoard } from './JobBoard'
import { connect } from 'react-redux'
import { setActiveNavLink } from './actions/navLinkActions'
import { setSearch } from './actions/searchActions'
import { fetchJobsIfNeeded } from './actions/jobFetchActions'
import { setActiveRole, setActiveType } from './actions/jobFilterActions'

const mapStateToProps = (state, ownProps) => {
  return {
    jobs: state.jobs.items
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    resetActiveNavLink: () => dispatch(setActiveNavLink("")),
    resetActiveRole: () => dispatch(setActiveRole("")),
    resetActiveType: () => dispatch(setActiveType("")),
    loadJobs: () => dispatch(fetchJobsIfNeeded()),
    resetSearch: () => dispatch(setSearch(""))
  }
}

const JobBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(JobBoard)

export default JobBoardContainer

