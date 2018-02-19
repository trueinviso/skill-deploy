import React from 'react'
import BrandIcon from './Nav/BrandIcon'
import NavLink from './containers/NavLink'
import Search from './Nav/Search'

function Nav() {
  return(
    <div className="small-12 columns" id="nav">
      <BrandIcon />
      <Search />
      <NavLink />
    </div>
  );
}

export default Nav
