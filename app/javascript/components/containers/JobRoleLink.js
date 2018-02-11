//This is the container for the JobRole and manages state

import { JobRole } from '../components/JobBoard/JobRole'
import { connect } from 'react-redux'
import { setActiveRole } from '../actions/actions'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.role.name === state.activeRole
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setActiveRole: () => {
      dispatch(setActiveRole(ownProps.role.name))
    }
  }
}

const JobRoleLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(JobRole)

export default JobRoleLink

