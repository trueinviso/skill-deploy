import React from 'react'

function Notifications({ user }) {
  return(
    <div>
      <div className="secondary-heading">
        Notifications
      </div>
      <EmailUpdates user={user} />
      <WeeklyNewsletter user={user} />
    </div>
  );
}

function EmailUpdates({ user }) {
  return(
    <div className="text-field radio-label no-label-margin">
      <label>
        <input type="checkbox" value={user.update_notifications || ""} />
        <span>Send me updates about new products and features</span>
      </label>
      <div className="instructions checkbox-instructions">
        Get occasional updates about new features and product enhancements
      </div>
    </div>
  );
}

function WeeklyNewsletter({ user }) {
  return(
    <div className="text-field radio-label no-label-margin">
      <label>
        <input type="checkbox" value={user.weekly_newsletter || ""} />
        <span>Sign me up for the weekly newsletter</span>
      </label>
      <div className="instructions checkbox-instructions">
        Receive our weekly newsletter featuring the latest projects
      </div>
    </div>
  );
}

export default Notifications
