import React from 'react'
import Job from './JobBoard/Job'
import JobRole from './JobBoard/JobRole'
import JobType from './JobBoard/JobType'
import heyfamFetch from '../helpers/heyfamFetch'

const jobsUrl = "/api/v1/jobs"
const filtersUrl = "/api/v1/job_filters"

class JobBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: [],
      roles: [],
      types: [],
      activeRole: "",
      activeType: "",
      search: this.props.location.search,
      isFetching: false
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.location.search !== prevProps.location.search) {
      this.setState(
        {
          search: this.props.location.search,
          activeRole: "",
          activeType: ""
        },
        () => this.fetchJobs(this.state.activeType, this.state.activeRole)
      )
    }
  }

  componentWillMount() {
    const url = `${jobsUrl}?search=${this.parseSearchParam()}`
    heyfamFetch(url, {})
      .then(json => { this.setState({ jobs: json })})
      .then(() => {
        heyfamFetch(filtersUrl, {})
          .then(json => {
            this.setState({
              roles: json.roles,
              types: json.types
            })
          }
        )
      }
    )
  }

  parseSearchParam() {
    return new URLSearchParams(this.state.search).get("search") || ""
  }

  fetchJobs = (type, role) => {
    const url = `${jobsUrl}?job_type_name=${type}&job_role_name=${role}&search=${this.parseSearchParam()}`

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
    return(
      <div className="jobs-index__wrapper row">
        <div className="small-12 columns">
          <JobFilters
            roles={this.state.roles}
            types={this.state.types}
            state={this.state}
            setActiveRole={this.setActiveRole}
            setActiveType={this.setActiveType}
          />
          <JobList jobs={this.state.jobs}  />
        </div>
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
      <ul className="small-block-grid-1">
        {props.jobs.map((job) => {
          return renderJob(job)
        })}
      </ul>
    </div>
  );
}

export default JobBoard
