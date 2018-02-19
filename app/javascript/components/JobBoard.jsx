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
      search: this.parseSearchParam(),
      isFetching: false
    }
  }

  componentDidUpdate(prevProps) {
    if(this.urlChanged(prevProps)) {
      this.refreshJobs()
    }
  }

  urlChanged(prevProps) {
    if(!this.props.location) return false
    return this.props.location.search !== prevProps.location.search
  }

  refreshJobs() {
    this.setState(
      {
        search: this.parseSearchParam(),
        activeRole: "",
        activeType: ""
      },
      () => this.fetchJobs(this.state.activeType, this.state.activeRole)
    )
  }

  componentWillMount() {
    const url = `${jobsUrl}?search=${this.state.search}`
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
    if(!this.props.location) return ""
    return new URLSearchParams(this.props.location.search).get("search") || ""
  }

  fetchJobs = (type, role) => {
    const url = `${jobsUrl}?job_type_name=${type}&job_role_name=${role}&search=${this.state.search}`

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

  clearSearch = () => {
    this.props.history.push({ pathname: '/jobs' })
  }

  render() {
    return(
      <div className="jobs-index__wrapper row">
        <JobSearchLabel search={this.state.search} clearSearch={this.clearSearch}/>
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

function JobSearchLabel(props) {
  function renderLabel() {
    if(props.search && props.search != "") {
      return(
        <div className="small-12 columns jobs-index__search-result" onClick={props.clearSearch}>
          <ul>
            <div>
              <li>
                {props.search}
                <span className="erase-query">x</span>
              </li>
            </div>
          </ul>
        </div>
      )
    } else {
      return ""
    }
  }
  return renderLabel()
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
