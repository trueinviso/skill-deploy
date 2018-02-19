import 'babel-polyfill'
import React from 'react'
import Job from './JobBoard/Job'
import JobRoleLink from './containers/JobRoleLink'
import JobTypeLink from './containers/JobTypeLink'
import JobSearchLabelContainer from './containers/JobSearchLabelContainer'
import heyfamFetch from '../helpers/heyfamFetch'

const filtersUrl = "/api/v1/job_filters"

class JobBoard extends React.Component {
  state = {
    roles: [],
    types: []
  }

  componentWillMount() {
    this.props.resetActiveNavLink()
    this.loadData()
  }

  componentWillUnmount() {
    this.props.resetSearch()
    this.props.resetActiveRole()
    this.props.resetActiveType()
  }

  loadData() {
    heyfamFetch(filtersUrl, {})
      .then(
        json => { this.setState({
          roles: json.roles,
          types: json.types
        })
      })
      .then(() => this.props.loadJobs())
  }

  render() {
    const { jobs } = this.props

    return(
      <div className="jobs-index__wrapper row">
        <JobSearchLabelContainer />
        <div className="small-12 columns">
          <JobFilters
            roles={this.state.roles}
            types={this.state.types}
          />
          <JobList jobs={jobs}  />
        </div>
      </div>
    );
  }
}

function JobFilters(props) {
  return(
    <div className="jobs-index__tag-list">
      <ul>
        <JobRoleList roles={props.roles} />
        <JobTypeList types={props.types} />
      </ul>
    </div>
  );
}

function JobRoleList(props) {
  function renderRole(role) {
    return(
      <JobRoleLink
        key={role.id}
        role={role}
      />
    );
  }

  return(
    props.roles.map((role) => {
      return renderRole(role)
    })
  );
}


function JobTypeList(props) {
  function renderType(type) {
    return(
      <JobTypeLink
        key={type.id}
        type={type}
      />
    );
  }

  return(
    props.types.map((type) => {
      return renderType(type)
    })
  );
}

function JobList(props) {
  function renderJob(job) {
    return <Job key={job.id} job={job} />
  }

  return(
   <div className="jobs-index__card-list" id="jobs-index">
      <ul className="small-block-grid-1">
        {props.jobs.map((job) => {
          return renderJob(job)
        })}
      </ul>
    </div>
  );
}

export { JobBoard }
