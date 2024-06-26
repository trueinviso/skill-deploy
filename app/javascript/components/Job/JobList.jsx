import PropTypes from "prop-types"
import React, { PureComponent } from "react"
import JobListItem from "./JobListItem"

class JobList extends PureComponent {
  static propTypes = {
    jobs: PropTypes.arrayOf(PropTypes.object),
    favorites: PropTypes.array,
    appliedFors: PropTypes.array,
    className: PropTypes.string
  }

  render() {
    const { className, favorites, jobs, appliedFors } = this.props
    return (
      <ul className={className}>
        {jobs.map(job => (
          <JobListItem key={job.id} favorites={favorites} appliedFors={appliedFors} {...job} />
        ))}
      </ul>
    )
  }
}

export default JobList
