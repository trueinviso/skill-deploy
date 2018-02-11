import React from 'react'
import PropTypes from 'prop-types'
import Job from './Job'

const JobList = ({ jobs }) => {
  function renderJob(job) {
    return <Job key={job.id} job={job} />
  }

  return(
   <div className="jobs-index__card-list" id="jobs-index">
      <ul className="small-block-grid-1">
        {jobs.map((job) => {
          return renderJob(job)
        })}
      </ul>
    </div>
  );
}

JobList.propTypes = {
  jobs: PropTypes.array.isRequired
}

export { JobList }
