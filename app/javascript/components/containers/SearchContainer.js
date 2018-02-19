import { Search } from '../Nav/Search'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { setSearch } from '../actions/searchActions'
import { fetchJobsIfNeeded } from '../actions/jobFetchActions'
import { setActiveRole, setActiveType } from '../actions/jobFilterActions'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitHandler: (e) => {
      e.preventDefault()
      const query = document.getElementById("search").value
      dispatch(setSearch(query))
      dispatch(setActiveRole("")),
      dispatch(setActiveType("")),
      dispatch(fetchJobsIfNeeded())
      ownProps.history.push({ pathname: '/jobs' })
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default withRouter(SearchContainer)
