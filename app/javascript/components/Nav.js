import React from 'react'
import BrandIcon from './Nav/BrandIcon'
import NavLink from './containers/NavLink'
import SearchContainer from './containers/SearchContainer'

function Nav() {
  return(
    <div className="small-12 columns" id="nav">
      <BrandIcon />
      <SearchContainer />
      <NavLink />
    </div>
  );
}

export default Nav
