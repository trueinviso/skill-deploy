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
    favorites: PropTypes.array,
    appliedFors: PropTypes.array,
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
    const { favorites, appliedFors } = this.props
    const { jobs } = this.state
    return (
      <Fragment>
        <div className="jobs-list__filters-container">
          <form className="nav__search" action="/jobs" acceptCharset="UTF-8" method="get">
            <input name="utf8" type="hidden" value="✓"/>
            <div className="nav__search__field">
              <span className="nav__search__field__icon">&#9906;</span>
              <input type="text" name="search" id="search" placeholder="Search"/>
            </div>
            <input type="submit" name="commit" value="Search" id="search-submit" data-disable-width="Search"/>
          </form>
          <div className="jobs-list__filters-separator-container">
            <div className="jobs-list__filters-separator"></div>
          </div>
          <JobFilterList
              activeFilters={this.state.activeFilters}
              updateFilters={this.updateFilters}
          />
        </div>
        <div className={`jobs-list__container ${'scrollable'}`}>
          <div className="jobs-list">
            <JobList jobs={jobs} favorites={favorites} appliedFors={appliedFors} />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default JobPage
