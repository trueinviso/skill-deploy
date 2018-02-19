import React from 'react'
import { Link } from 'react-router-dom'

function SideNav({ match, activeLink, setActiveLink }) {
  function classNames(name) {
    return `profile-link ${activeLink == name ? "active-link" : ""}`
  }

  function ProfileLink() {
    return(
      <div className="small-12 columns">
        <Link
          onClick={() => setActiveLink("")}
          className={classNames("")}
          to={`${match.path}`}>Profile
        </Link>
      </div>
    );
  }

  function SocialLink() {
    return(
      <div className="small-12 columns">
        <Link
          onClick={() => setActiveLink("social")}
          className={classNames("social")}
          to={`${match.path}/social/edit`}>Social Profiles
        </Link>
      </div>
    );
  }

  function NotificationsLink() {
    return(
      <div className="small-12 columns">
        <Link
          onClick={() => setActiveLink("notifications")}
          className={classNames("notifications")}
          to={`${match.path}/notifications/edit`}>Notifications
        </Link>
      </div>
    );
  }

  return(
    <div className="small-3 columns">
      <div className="side-nav">
        <ProfileLink />
        <SocialLink />
        <NotificationsLink />
      </div>
    </div>
  );
}

export default SideNav
