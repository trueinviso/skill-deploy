import PropTypes from "prop-types";
import React, { PureComponent, Fragment } from "react";
import axios from "axios";
import JobFilterList from "./JobFilterList";
import JobList from "./JobList";

class JobPage extends PureComponent {
  constructor(props) {
    super(props);
    this.onChangeFilter = this.onChangeFilter.bind(this);
  }

  static propTypes = {
    filters: PropTypes.any,
    initialJobs: PropTypes.arrayOf(PropTypes.object),
    favorites: PropTypes.array
  };

  state = {
    activeFilters: { search: this.props.search },
    jobs: this.props.jobs
  };

  onChangeFilter = ({ name, value }) => {
    const filters = this.state.activeFilters;
    filters[`job_${name}_name`] = value;

    this.setState({activeFilters: filters});

    axios.get('/api/v1/jobs', {
        params: filters
      })
      .then((response) => {
        this.setState({jobs: response.data.jobs});
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
  }

  render() {
    const { favorites } = this.props;
    const { jobs } = this.state;
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
              jobs = {jobs}
              favorites={favorites}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default JobPage;
