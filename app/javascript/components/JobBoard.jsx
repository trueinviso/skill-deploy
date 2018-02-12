import React from 'react'
import Job from './JobBoard/Job'
import JobRole from './JobBoard/JobRole'
import JobType from './JobBoard/JobType'

class JobBoard extends React.Component {
  render() {
    const { roles, types, link, jobs, favorites } = this.props
    return(
      <div className="jobs-index__wrapper row">
        <div className="small-12 columns">
          <JobFilters roles={roles} types={types} link={link} />
          <JobList jobs={jobs} favorites={favorites} />
        </div>
      </div>
    );
  }
}

class JobFilters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeRole: "",
      activeType: ""
    }
  }

  setActiveRole = (name) => {
    this.setState({
      activeRole: this.state.activeRole != name ? name : ""
    })
  }

  setActiveType = (name) => {
    this.setState({
      activeType: this.state.activeType != name ? name : ""
    })
  }

  render() {
    return(
      <div className="jobs-index__tag-list">
        <ul>
          <JobRoleList roles={this.props.roles} state={this.state} setActiveRole={this.setActiveRole} />
          <JobTypeList types={this.props.types} state={this.state} setActiveType={this.setActiveType} />
        </ul>
      </div>
    );
  }
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
