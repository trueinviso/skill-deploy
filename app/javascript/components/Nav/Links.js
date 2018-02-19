import React from 'react'
import { Link } from 'react-router-dom'

function Links({ activeLink, setActiveNavLink }) {
  function activeClass(path) {
    if(path === activeLink) {
      return "active-link"
    } else {
      return ""
    }
  }

  return(
    <div className="small-4 columns menu">
      <Link
        to='/favorite_jobs'
        className={`small-4 columns item ${activeClass('favorite_jobs')}`}
        name='favorite_jobs'
        onClick={setActiveNavLink}
      >
        Saved
      </Link>

      <Link
        to='/applied'
        className={`small-4 columns item ${activeClass('applied')}`}
        name='applied'
        onClick={setActiveNavLink}
      >
        Applied
      </Link>

      <Link
        to='/profile'
        className={`small-4 columns item ${activeClass('profile')}`}
        name='profile'
        onClick={setActiveNavLink}
      >
        Profile
      </Link>
    </div>
  );
}

export { Links }
