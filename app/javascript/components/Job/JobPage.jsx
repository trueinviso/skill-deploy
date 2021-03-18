import PropTypes from "prop-types"
import React, { PureComponent, Fragment } from "react"
import JobFilterList from "./JobFilterList"
import JobList from "./JobList"
import appendQueryString from "../../helpers/appendQueryString"

class JobPage extends PureComponent {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    filters: PropTypes.any,
    initialJobs: PropTypes.arrayOf(PropTypes.object),
    favorites: PropTypes.array
  }

  state = {
    activeFilters: { search: this.props.search },
    jobs: this.props.initialJobs
  }

  updateFilters = callback => this.setState(callback(), this.filterJobs)

  filterJobs = () => {
    const url = appendQueryString(this.props.api, this.state.activeFilters)
    fetch(url)
      .then(response => response.json())
      .then(response => this.setState({ jobs: response.jobs }))
      .catch(error => console.log(error))
  }

  render() {
    const { favorites } = this.props
    const { jobs } = this.state
    return (
      <Fragment>
        <div className="border-bottom-container">
          <div className="jobs-list__filters-container">
            <JobFilterList
              activeFilters={this.state.activeFilters}
              updateFilters={this.updateFilters}
            />
          </div>
        </div>
        <div className="desktop-container job-list__desktop-container">
          <div className="jobs-list">
            <JobList jobs={jobs} favorites={favorites} />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default JobPage
