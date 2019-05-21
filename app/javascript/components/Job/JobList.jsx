import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import JobListItem from "./JobListItem";

class JobList extends PureComponent {
  static propTypes = {
    initialJobs: PropTypes.arrayOf(PropTypes.object),
    favorites: PropTypes.array,
    filters: PropTypes.object
  };

  static defaultProps = {
    favorites: []
  };

  state = {
    jobs: this.props.initialJobs
  };

  render() {
    const { jobs } = this.state;
    const { favorites } = this.props;

    return (
      <ul>
        {jobs.map(job => (
          <JobListItem
            key={job.id}
            {...job}
            isFavorite={favorites.includes(job.id)}
          />
        ))}
      </ul>
    );
  }
}

export default JobList;
