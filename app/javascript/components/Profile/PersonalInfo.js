import React from 'react'
import FileUploadContainer from '../containers/FileUploadContainer'

function PersonalInfo({ user, emptyPhoto }) {
  return(
    <div>
      <div className="secondary-heading row">
        Profile
      </div>
      <div className="row">
        <FileUploadContainer user={user} emptyPhoto={emptyPhoto} />
        <UserProfileFields user={user} />
      </div>
      <div className="row">
        <EmailField user={user} />
        <LocationField user={user} />
        <WebsiteField user={user} />
        <BioField user={user} />
        <PasswordFields user={user} />
        <SubmitField />
      </div>
    </div>
  );
}

function UserProfileFields({ user }) {
  return(
    <div>
      <div className="text-field small-6 column no-margin-bottom">
        <label>
          First Name
          <input type="text" value={user.first_name || ""} />
        </label>
      </div>
      <div className="text-field small-5 column right no-margin-bottom">
        <label>
          Last Name
          <input type="text" value={user.last_name || ""} />
        </label>
      </div>
    </div>
  );
}

function EmailField({ user }) {
  return(
    <div className="text-field">
      <label>
        Email
        <input type="text" value={user.email || ""} />
      </label>
    </div>
  );
}

function LocationField({ user }) {
  return(
    <div className="text-field">
      <label>
        Location
        <input type="text" value={user.location || ""} />
      </label>
    </div>
  );
}

function WebsiteField({ user }) {
  return(
    <div className="text-field">
      <label>
        Website
        <input type="text" value={user.website || ""} />
      </label>
    </div>
  );
}

function BioField({ user }) {
  return(
    <div className="text-field">
      <label>
        Bio
        <input type="text" value={user.bio || ""} />
      </label>
    </div>
  );
}

function PasswordFields({ user }) {
  return(
    <div>
      <div className="text-field">
        <label>
          Password
          <input type="text" value="" />
        </label>
      </div>
      <div className="text-field">
        <label>
          Password Confirmation
          <input type="text" value="" />
        </label>
      </div>
      <div className="text-field">
        <label>
          Current Password
          <input type="text" value="" />
        </label>
      </div>
    </div>
  );
}

function SubmitField() {
  return(
    <div className="submit-field">
      <button>Save</button>
    </div>
  );
}

export default PersonalInfo
