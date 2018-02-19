import React from 'react'
import { Route } from 'react-router-dom'
import Form from './Profile/Form'
import SideNav from './Profile/SideNav'

const API = '/api/v1/users'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeLink: "",
      match: this.props.match
    }

    this.setActiveLink = this.setActiveLink.bind(this)
  }

  setActiveLink(activeLink) {
    this.setState({ activeLink: activeLink })
  }

  render() {
    const props = {
      ...this.state,
      setActiveLink: this.setActiveLink
    }

    return(
      <div className="row">
        <div className="small-12 columns wrapper">
          <SideNav {...props } />
          <FormContainer match={this.state.match} />
        </div>
      </div>
    );
  }
}

function FormContainer({ match }) {
  return(
    <div className="forms small-9 columns" id="partial">
      <Route exact path={`${match.path}`} component={SubView} />
      <Route path={`${match.path}/:sectionName/edit`} component={SubView} />
    </div>
  );
}

function SubView({ match, history }) {
  return(
    <div className="align-center forms">
      <div className="column small-12 medium-10">
        <Form sectionName={match.params.sectionName} />
      </div>
    </div>
  );
}

export default Profile
