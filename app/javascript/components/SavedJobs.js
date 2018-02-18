import React from 'react'
import Job from './JobBoard/Job'
import heyfamFetch from '../helpers/heyfamFetch'

const API = "/api/v1/favorite_jobs"

class SavedJobs extends React.Component {
  state = {
    favorites: []
  }

  componentWillMount() {
    heyfamFetch(API, {})
      .then(json => this.setState({favorites: json }))
  }

  render() {
    const jobItems = this.state.favorites.map((fav) => {
      return <Job key={fav.id} job={fav} />
    })
    console.log(this.state.favorites)

    return(
      <div className="jobs-index__wrapper row">
        <div className="jobs-index__card-list">
          {jobItems}
        </div>
      </div>
    );
  }
}

export default SavedJobs
