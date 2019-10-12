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

  state = {
    jobs: this.props.initialJobs
  };

  render() {
    const { jobs } = this.state;
    const { className, favorites } = this.props;

    return (
      <ul className={className}>
        {jobs.map(job => (
          <JobListItem
            key={job.id}
            favorites={favorites}
            {...job}
          />
        ))}
      </ul>
    );
  }
}

export default JobList;
