import React from 'react'
import { Link, Route } from 'react-router-dom'
import Form from './Profile/Form'

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
    return(
      <div className="row">
        <div className="small-12 columns wrapper">
          <SideNav {...this.state} setActiveLink={this.setActiveLink} />
          <FormContainer match={this.state.match} />
        </div>
      </div>

    );
  }
}

function SideNav({ match, activeLink, setActiveLink }) {
  function classNames(name) {
    return `profile-link ${activeLink == name ? "active-link" : ""}`
  }

  return(
    <div className="small-3 columns">
      <div className="side-nav">
        <div className="small-12 columns">
          <Link
            onClick={() => setActiveLink("")}
            className={classNames("")}
            to={`${match.path}`}>Profile
          </Link>
        </div>
        <div className="small-12 columns">
          <Link
            onClick={() => setActiveLink("social")}
            className={classNames("social")}
            to={`${match.path}/social/edit`}>Social Profiles
          </Link>
        </div>
        <div className="small-12 columns">
          <Link
            onClick={() => setActiveLink("notifications")}
            className={classNames("notifications")}
            to={`${match.path}/notifications/edit`}>Notifications
          </Link>
        </div>
      </div>
    </div>
  );
}

function FormContainer({ match }) {
  return(
    <div className="forms small-9 columns" id="partial">
      <Route exact path={`${match.path}`} component={SubView} />
      <Route path={`${match.path}/:sectionName/edit`} component={SubView} />
    </div>
  );
}

function SubView({ match }) {
  return(
    <div className="align-center forms">
      <div className="column small-12 medium-10">
        <Form sectionName={match.params.sectionName} />
      </div>
    </div>
  );
}

export default Profile
