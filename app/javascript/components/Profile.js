import React from 'react'
import Form from './Profile/Form'

const API = '/api/v1/users'

function Profile({ user }) {
  return(
    <div className="align-center forms">
      <div className="column small-12 medium-10">
        <div className="secondary-heading">
          Your Profile
        </div>
        <Form user={user}/>
      </div>
    </div>
  );
}

export default Profile
