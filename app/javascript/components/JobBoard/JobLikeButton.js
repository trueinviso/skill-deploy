import React from 'react'
import LikeSVG from '../svg/LikeSVG'
import heyfamFetch from '../../helpers/heyfamFetch'

const API = "/api/v1/favorite_jobs"

class JobLikeButton extends React.Component {
  state = {
    liked: false,
    isFetching: false
  }

  componentWillMount() {
    this.setState({ liked: this.props.job.liked })
  }

  addFavorite = () => {
    const options = { method: "POST" }

    if(!this.state.isFetching) {
      this.setState({ isFetching: true })
      heyfamFetch(`${API}?id=${this.props.job.id}`, {}, options)
        .then(this.setState({ liked: true, isFetching: false }))
    }
  }

  removeFavorite = () => {
    const options = { method: "DELETE" }

    if(!this.state.isFetching) {
      this.setState({ isFetching: true })
      heyfamFetch(`${API}/${this.props.job.id}`, {}, options)
        .then(this.setState({ liked: false, isFetching: false  }))
    }
  }

  render() {
    return(
      <div id={"job-" + this.props.job.id}
        onClick={() => {this.state.liked ? this.removeFavorite() : this.addFavorite()}}
      >
        <div className="right">
          <button type="submit" className="job-card__links">
            <LikeSVG liked={this.state.liked}/>
          </button>
        </div>
      </div>
    );
  }
}

export default JobLikeButton