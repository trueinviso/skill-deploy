import React from 'react'
import { withRouter } from 'react-router'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.submitHandler = this.submitHandler.bind(this)
  }

  submitHandler(e) {
    e.preventDefault()
    this.props.history.push({
      pathname: '/jobs',
      search: `?search=${document.getElementById("search-field").value}`
    })
  }

  render() {
    return(
      <div className="small-6 columns" id="search-form">
        <form onSubmit={this.submitHandler}>
          <div className="search-field">
            <input type="text" placeholder="Search" id="search" />
            <span className="search-icon">&#9906;</span>
          </div>
          <input type="submit" value="Search" id="search-submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(Search)
