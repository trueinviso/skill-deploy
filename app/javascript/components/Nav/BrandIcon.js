import React from 'react'
import BrandSVG from '../svg/BrandSVG'
import { Link } from 'react-router-dom'

function BrandIcon() {
  return(
    <div className="small-2 columns text-right brand-container">
      <Link to='/' className="brand-icon">
        <BrandSVG />
      </Link>
    </div>
  );
}

export default BrandIcon
