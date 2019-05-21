import PropTypes from "prop-types";
import React, { PureComponent, Fragment } from "react";
import JobFilterList from "./JobFilterList";
import JobList from "./JobList";

class JobPage extends PureComponent {
  static propTypes = {
    filters: PropTypes.any,
    initialJobs: PropTypes.arrayOf(PropTypes.object),
    favorites: PropTypes.array
  };

  state = {
    activeFilters: {}
  };

  onChangeFilter = ({ name, value }) =>
    this.setState(prev => ({
      activeFilters: {
        ...prev.filters,
        [name]: value
      }
    }));

  render() {
    const { initialJobs, favorites } = this.props;
    const { activeFilters } = this.state;

    return (
      <Fragment>
        <div className="border-bottom-container">
          <div className="jobs-list__filters-container">
            <JobFilterList onChange={this.onChangeFilter} />
          </div>
        </div>
        <div className="desktop-container job-list__desktop-container">
          <div className="jobs-list">
            <JobList
              initialJobs={initialJobs}
              favorites={favorites}
              filters={activeFilters}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default JobPage;
