import { JobSearchLabel } from '../JobBoard/JobSearchLabel'
import { connect } from 'react-redux'
import { setActiveRole, setActiveType } from '../actions/jobFilterActions'
import { setSearch } from '../actions/searchActions'
import { fetchJobsIfNeeded } from '../actions/jobFetchActions'

const mapStateToProps = (state, ownProps) => {
  return {
    search: state.search
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clearSearch: (e) => {
      e.preventDefault()
      dispatch(setActiveRole(""))
      dispatch(setActiveType(""))
      dispatch(setSearch(""))
      dispatch(fetchJobsIfNeeded())
    }
  }
}

const JobSearchLabelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(JobSearchLabel)

export default JobSearchLabelContainer

