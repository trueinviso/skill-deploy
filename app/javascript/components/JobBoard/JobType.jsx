import React from 'react'
import PropTypes from 'prop-types'

const JobType = ({ active, type, setActiveType }) => {
  const className = `active-${type.name.replace(/ +/g, '-').toLowerCase()}`

  return(
    <a href=""
      onClick={setActiveType}
    >
      <li className={active ? className : ""}>
        {type.name}
      </li>
    </a>
  );
}

JobType.propTypes = {
  active: PropTypes.bool.isRequired,
  type: PropTypes.object.isRequired,
  setActiveType: PropTypes.func.isRequired
}

export { JobType }
