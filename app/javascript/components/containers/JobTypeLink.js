import { JobType } from '../JobBoard/JobType'
import { connect } from 'react-redux'
import { setActiveType } from '../actions/jobFilterActions'
import { fetchJobsIfNeeded } from '../actions/jobFetchActions'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.type.name === state.activeType
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setActiveType: (e) => {
      e.preventDefault()
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

