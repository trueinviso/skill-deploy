import { JobBoard } from './JobBoard'
import { connect } from 'react-redux'
import { setActiveNavLink } from './actions/navLinkActions'

const mapStateToProps = (state, ownProps) => {
  return {
    jobs: state.jobs.items
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    resetActiveNavLink: () => dispatch(setActiveNavLink(""))
  }
}

const JobBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(JobBoard)

export default JobBoardContainer

