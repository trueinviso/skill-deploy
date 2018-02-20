import React from 'react'
import heyfamFetch from '../../helpers/heyfamFetch'
import PersonalInfo from './PersonalInfo'
import Social from './Social'
import Notifications from './Notifications'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.emptyPhoto = this.emptyPhoto.bind(this)
  }
  //inputHandler(e) {
  //  this.setState({ [e.target.id]: e.target.value })
  //}
  componentWillMount() {
    this.props.loadUser()
  }

  emptyPhoto() {
    return this.props.user.data.thumbnail.includes("empty_photo_state_icon")
  }

  getFormPartial() {
    switch(this.props.sectionName) {
      case "social":
        return <Social user={this.props.user.data} />
      case "notifications":
        return <Notifications user={this.props.user.data} />
      default:
        return <PersonalInfo
          user={this.props.user.data}
          emptyPhoto={this.emptyPhoto}
        />
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

export { Form }
