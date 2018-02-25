import React from 'react'
import heyfamFetch from '../helpers/heyfamFetch'

const API = "/api/v1/apply"

class ApplyButton extends React.Component {
  state = {
    applied: false,
    isFetching: false
  }

  componentWillMount() {
    this.setState({ liked: this.props.job.liked })
  }

  apply = (e) => {
    const options = { method: "POST" }

    if(!this.state.isFetching) {
      this.setState({ isFetching: true })
      heyfamFetch(`${API}?id=${this.props.job.id}`, {}, options)
        .then(this.setState({ applied: true, isFetching: false }))
    }
  }

  render() {
    return(
      <div className="submit-field">
        <a
          href="#"
          onClick={() => {this.apply()}}
        >
          Apply
        </a>
      </div>
    );
  }
}

export default ApplyButton
