import React from 'react'
import PropTypes from 'prop-types'

const JobType = ({ active, type, onClick }) => {
  return(
    <a href=""
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      <li className={active ? type.name.replace(/ +/g, '-').toLowerCase() : ""}>
        {type.name}
      </li>
    </a>
  );
}

JobType.propTypes = {
  active: PropTypes.bool.isRequired,
  type: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export { JobType }
