//This is the container for the JobRole and manages state

import { JobType } from '../components/JobBoard/JobType'
import { connect } from 'react-redux'
import { setActiveRole } from '../actions/actions'

const mapStateToProps = (state, ownProps) => {
  console.log("MAP TYPE TO PROPS")
  return {
    active: ownProps.role.name === state.activeType
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setActiveType(ownProps.role.name))
    }
  }
}

const JobTypeLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(JobType)

export default JobTypeLink

