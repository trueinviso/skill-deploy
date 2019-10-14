import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import JobList from "./JobList";

class FavoriteJobPage extends PureComponent {
  static propTypes = {
    jobs: PropTypes.arrayOf(PropTypes.object),
    favorites: PropTypes.array
  };

  render() {
    const { jobs, favorites } = this.props;

    return (
      <JobList
        className="favorite-job-list"
        jobs={jobs}
        favorites={favorites}
      />
    );
  }
}

export default FavoriteJobPage;
