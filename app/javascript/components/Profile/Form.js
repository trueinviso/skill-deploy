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
      user: {},
      email: "",
      first_name: "",
      last_name: "",
      twitter: "",
      facebook: "",
      linked_in: "",
      dribbble: "",
      github: "",
      codepen: "",
      medium: "",
      behance: "",
      instagram: "",
      vimeo: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.fetchUser = this.fetchUser.bind(this)
    this.inputHandler = this.inputHandler.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  inputHandler(e) {
    this.setState({ [e.target.id]: e.target.value })
  }

  fetchUser() {
    const url = '/api/v1/user'
    heyfamFetch(url, {})
      .then(json => {
        const values = this.buildState(json)
        this.setState({
          user: json,
          ...values
        })
      }
    )
  }

  buildState(json) {
    const values = {}
    for(var key in json) {
      values[key] = json[key]
    }
    return values
  }

  componentWillMount() {
    this.fetchUser()
  }

  getFormPartial() {
    switch(this.props.sectionName) {
      case "social":
        return <Social
          handler={this.inputHandler}
          state={this.state}
        />
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
