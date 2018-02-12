import { JobLikeButton } from '../components/JobBoard/JobLikeButton'
import { connect } from 'react-redux'
import { toggleFavoriteJobIfNeeded, fetchFavoriteJobs } from '../actions/actions'

const mapStateToProps = (state, ownProps) => {
  return {
    favorite: state.favoriteJobs.items.includes(ownProps.job.id)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleFavorite: (id) => {
      console.log("toggle favorite job " + id)
      dispatch(toggleFavoriteJobIfNeeded(id))
      dispatch(fetchFavoriteJobs())
    }
  }
}

const JobLikeButtonLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(JobLikeButton)

export default JobLikeButtonLink

