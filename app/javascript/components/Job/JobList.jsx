import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import JobListItem from "./JobListItem";

class JobList extends PureComponent {
  static propTypes = {
    jobs: PropTypes.arrayOf(PropTypes.object),
    favorites: PropTypes.array,
    className: PropTypes.string
  };

  static defaultProps = {
    favorites: []
  };

  render() {
    const { jobs, favorites, className } = this.props;
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
