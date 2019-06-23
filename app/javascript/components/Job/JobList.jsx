import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import JobListItem from "./JobListItem";

class JobList extends PureComponent {
  static propTypes = {
    initialJobs: PropTypes.arrayOf(PropTypes.object),
    favorites: PropTypes.array,
    filters: PropTypes.object,
    className: PropTypes.string
  };

  static defaultProps = {
    favorites: []
  };

  state = {
    jobs: this.props.initialJobs
  };

  render() {
    const { jobs } = this.state;
    const { favorites, className } = this.props;

    return (
      <ul className={className}>
        {jobs.map(job => (
          <JobListItem
            key={job.id}
            liked={favorites.includes(job.id)}
            {...job}
          />
        ))}
      </ul>
    );
  }
}

export default JobList;
