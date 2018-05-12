import React from 'react'
import JobLikeButton from './JobLikeButton'

function Job(props) {
  function JobDescription() {
    return(
      <div className="job-card__description">
        <span className="job-card__company-name">
          {props.job.company_name} is looking for a { " " }
        </span>
        <span className="job-card__name">
          {props.job.name}
        </span>
      </div>
    );
  }

  function JobLocation() {
    return(
      <div className="job-card__attributes">
        {props.job.location}
      </div>
    );
  }

  function borderColor() {
    if(!props.job.job_types) return ""
    switch(props.job.job_types[0].name) {
      case "Full Time":
        return "full-time"
      case "Part Time":
        return "part-time"
      case "Freelance":
        return "contract"
      default:
        return ""
    }
  }

  return(
    <li>
      <div className={`job-card ${borderColor()}`}>
        <div className="job-card__left-panel">
          <a href={`jobs/${props.job.id}`}>
            <JobDescription />
            <JobLocation />
          </a>
        </div>
        <div className="job-card__right-panel">
          <JobLikeButton job={props.job} />
        </div>
      </div>
    </li>
  );
}

export default Job
