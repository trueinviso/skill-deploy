import React from 'react'
import PropTypes from 'prop-types'
import Job from './Job'
import { HashLoader } from 'react-spinners'

const JobList = ({ jobs, showSpinner }) => {
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
      <div className="spinner">
        <HashLoader
          color={"#1e1695"}
          loading={showSpinner}
        />
      </div>
    </div>
  );
}

JobList.propTypes = {
  jobs: PropTypes.array.isRequired,
  showSpinner: PropTypes.bool.isRequired
}

export { JobList }
