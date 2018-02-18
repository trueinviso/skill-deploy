import React from 'react'
import { Link } from 'react-router-dom'

function Links() {
  return(
    <div className="small-4 columns menu">
      <Link to='/favorite_jobs' className="small-4 columns item">Saved</Link>
      <Link to='/applied' className="small-4 columns item">Applied</Link>
      <Link to='/profile' className="small-4 columns item">Profile</Link>
    </div>
  );
}

export default Links
