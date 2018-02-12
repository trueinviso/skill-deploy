//This is the container for the JobRole and manages state

import { JobType } from '../components/JobBoard/JobType'
import { connect } from 'react-redux'
import { setActiveType, fetchJobsIfNeeded } from '../actions/actions'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.type.name === state.activeType
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setActiveType(ownProps.type.name))
      dispatch(fetchJobsIfNeeded())
    }
  }
}

const JobTypeLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(JobType)

export default JobTypeLink

