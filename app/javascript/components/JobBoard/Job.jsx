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
      <div className="visible-for-medium-up">
        <div className="job-card__attributes">
          {props.job.location}
        </div>
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
      <div className={`small-12 columns job-card ${borderColor()}`}>
        <a href="#" className="snall-12 medium-9 columns">
          <JobDescription />
          <JobLocation />
        </a>
        <div className="small-12 medium-3 columns job-card__right-panel">
          <JobLikeButton job={props.job} />
        </div>
      </div>
    </li>
  );
}

export default Job
