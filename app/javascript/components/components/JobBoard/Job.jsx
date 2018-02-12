import React from 'react'
import JobLikeButtonLink from '../../containers/JobLikeButtonLink'

function Job({ job }) {
  function JobDescription() {
    return(
      <div className="job-card__description">
        <span className="job-card__company-name">
          {job.company_name} is looking for a { " " }
        </span>
        <span className="job-card__name">
          {job.name}
        </span>
      </div>
    );
  }

  function JobLocation() {
    return(
      <div className="visible-for-medium-up">
        <div className="job-card__attributes">
          {job.location}
        </div>
      </div>
    );
  }

  function jobBorderColor() {
    if(!job.job_types) {
      return ""
    }
    switch(job.job_types[0].name) {
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
      <div className={`small-12 columns job-card ${jobBorderColor()}`}>
        <a href="#" className="snall-12 medium-9 columns">
          <JobDescription />
          <JobLocation />
        </a>
        <div className="small-12 medium-3 columns job-card__right-panel">
          <JobLikeButtonLink job={job} />
        </div>
      </div>
    </li>
  );
}

export default Job
