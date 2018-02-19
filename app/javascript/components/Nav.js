import React from 'react'
import BrandIcon from './Nav/BrandIcon'
import Links from './Nav/Links'
import Search from './Nav/Search'

function Nav() {
  return(
    <div className="small-12 columns" id="nav">
      <BrandIcon />
      <Search />
      <Links />
    </div>
  );
}

export default Nav
