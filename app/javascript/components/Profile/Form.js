import React from 'react'
import FileUpload from './FileUpload'
import heyfamFetch from '../../helpers/heyfamFetch'
import PersonalInfo from './PersonalInfo'
import Social from './Social'
import Notifications from './Notifications'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.fetchUser = this.fetchUser.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  fetchUser() {
    const url = '/api/v1/user'

    heyfamFetch(url, {})
      .then(json => this.setState({ user: json }))
  }

  componentWillMount() {
    this.fetchUser()
  }

  getFormPartial() {
    switch(this.props.sectionName) {
      case "social":
        return <Social user={this.state.user} />
      case "notifications":
        return <Notifications user={this.state.user} />
      default:
        return <PersonalInfo user={this.state.user} />
    }
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        {this.getFormPartial()}
      </form>
    );
  }
}

export default Form
