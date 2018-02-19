import { JobRole } from '../JobBoard/JobRole'
import { connect } from 'react-redux'
import { setActiveRole } from '../actions/jobFilterActions'
import { fetchJobsIfNeeded } from '../actions/jobFetchActions'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.role.name === state.activeRole
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setActiveRole: (e) => {
      e.preventDefault()
      dispatch(setActiveRole(ownProps.role.name))
      dispatch(fetchJobsIfNeeded())
    }
  }
}

const JobRoleLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(JobRole)

export default JobRoleLink

