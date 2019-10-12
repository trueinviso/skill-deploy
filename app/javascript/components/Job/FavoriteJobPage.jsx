import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import JobList from "./JobList";

class FavoriteJobPage extends PureComponent {
  static propTypes = {
    initialJobs: PropTypes.arrayOf(PropTypes.object),
    favorites: PropTypes.array
  };

  render() {
    const { initialJobs, favorites } = this.props;

    return (
      <JobList
        className="favorite-job-list"
        initialJobs={initialJobs}
        favorites={favorites}
      />
    );
  }
}

export default FavoriteJobPage;
