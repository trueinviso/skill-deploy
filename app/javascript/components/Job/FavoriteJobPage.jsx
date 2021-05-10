import PropTypes from "prop-types"
import React, { PureComponent } from "react"
import JobList from "./JobList"

class FavoriteJobPage extends PureComponent {
  static propTypes = {
    jobs: PropTypes.arrayOf(PropTypes.object),
    favorites: PropTypes.array,
    appliedFors: PropTypes.array,
  }

  render() {
    const { jobs, favorites, appliedFors } = this.props
    return (
      <JobList
        className="favorite-job-list"
        jobs={jobs}
        favorites={favorites}
        appliedFors={appliedFors}
      />
    )
  }
}

export default FavoriteJobPage
