import React from 'react'
import Job from './JobBoard/Job'
import JobRole from './JobBoard/JobRole'
import JobType from './JobBoard/JobType'
import heyfamFetch from '../helpers/heyfamFetch'

const API = "/api/v1/jobs"

class JobBoard extends React.Component {
  constructor(props) {
    super(props)
    const url = new URL(location.href)
    const search = url.searchParams.get("search")

    this.state = {
      jobs: [],
      activeRole: "",
      activeType: "",
      isFetching: false,
      search: search
    }
  }

  componentDidMount() {
    const search = this.state.search || ""
    const url = `${API}?search=${search}`

    heyfamFetch(url, {})
      .then(json => this.setState({
        jobs: json,
      })
    )
  }

  fetchJobs = (type, role) => {
    const search = this.state.search || ""
    const url = `${API}?job_type_name=${type}&job_role_name=${role}&search=${search}`

    if(!this.state.isFetching) {
      this.setState({ isFetching: true })
      heyfamFetch(url, {})
        .then(json => this.setState({ jobs: json, isFetching: false })
      )
    }
  }

  setActiveRole = (name) => {
    const nextRole = this.state.activeRole != name ? name : ""
    this.setState({
      activeRole: nextRole
    })
    this.fetchJobs(this.state.activeType, nextRole)
  }

  setActiveType = (name) => {
    const nextType = this.state.activeType != name ? name : ""
    this.setState({
      activeType: nextType
    })
    this.fetchJobs(nextType, this.state.activeRole)
  }

  render() {
    const { roles, types, favorites } = this.props
    return(
      <div className="jobs-index__wrapper">
        <JobFilters roles={roles} types={types} state={this.state} setActiveRole={this.setActiveRole} setActiveType={this.setActiveType} />
        <JobList jobs={this.state.jobs}  />
      </div>
    );
  }
}

function JobFilters(props) {
  return(
    <div className="jobs-index__tag-list">
      <ul>
        <JobRoleList roles={props.roles} state={props.state} setActiveRole={props.setActiveRole} />
        <JobTypeList types={props.types} state={props.state} setActiveType={props.setActiveType} />
      </ul>
    </div>
  );
}

function JobRoleList(props) {
  function renderRole(role, setActiveRole) {
    const active = role.name === props.state.activeRole
    return(
      <JobRole
        key={role.id}
        role={role}
        active={active}
        setActiveRole={setActiveRole}
      />
    );
  }

  return(
    props.roles.map((role) => {
      return renderRole(role, props.setActiveRole)
    })
  );
}


function JobTypeList(props) {
  function renderType(type, setActiveType) {
    const active = type.name === props.state.activeType
    return(
      <JobType
        key={type.id}
        type={type}
        active={active}
        setActiveType={setActiveType}
      />
    );
  }

  return(
    props.types.map((type) => {
      return renderType(type, props.setActiveType)
    })
  );
}

function JobList(props) {
  function renderJob(job) {
    return <Job key={job.id} job={job} />
  }

  return(
   <div className="jobs-index__card-list" id="jobs-index">
      <ul>
        {props.jobs.map((job) => {
          return renderJob(job)
        })}
      </ul>
    </div>
  );
}

export default JobBoard
