import React from 'react'

import Job from './JobBoard/Job'
import JobRole from './JobBoard/JobRole'
import JobType from './JobBoard/JobType'
import { setActiveRole, setActiveType } from '../actions/actions'

class JobBoard extends React.Component {
  render() {
    const { roles, types, link, jobs, favorites } = this.props
    return(
      <div className="jobs-index__wrapper row">
        <div className="small-12 columns">
          <JobFilters roles={roles} types={types} link={link} roleOnClick={setActiveRole}/>
          <JobList jobs={jobs} favorites={favorites} />
        </div>
      </div>
    );
  }
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

function JobFilters(props) {
  return(
    <div className="jobs-index__tag-list">
      <ul>
        <JobRoleList roles={props.roles} link={props.link} />
        <JobTypeList types={props.types} link={props.link} />
      </ul>
    </div>
  );
}

function JobRoleList(props) {
  function renderRole(link, role, onClick) {
    return <JobRole key={role.id} link={link} role={role} onClick={onClick} />
  }

  return(
    props.roles.map((role) => {
      return renderRole(props.link, role, props.roleOnClick)
    })
  );
}


function JobTypeList(props) {
  function renderType(link, type, onClick) {
    return <JobType key={type.id} link={link} type={type} onClick={onClick} />
  }

  return(
      props.types.map((type) => {
        return renderType(props.link, type, () => {})
      })
  );
}

export default JobBoard
