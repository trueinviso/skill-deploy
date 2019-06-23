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

    console.log("initialJobs", initialJobs);

    return <JobList className="favorite-job-list" initialJobs={initialJobs} />;
  }
}

export default FavoriteJobPage;
