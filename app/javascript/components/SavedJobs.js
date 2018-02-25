import React from 'react'
import Job from './JobBoard/Job'

class SavedJobs extends React.Component {
  render() {
    const jobItems = this.props.jobs.map((job) => {
      return <Job key={job.id} job={job} />
    })

    return(
      <div className="jobs-index__wrapper row">
        <div className="jobs-index__card-list">
					<ul className="small-block-grid-1">
          	{jobItems}
					</ul>
        </div>
      </div>
    );
  }
}

export default SavedJobs
