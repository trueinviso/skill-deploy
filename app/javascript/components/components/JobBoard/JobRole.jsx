import React from 'react'
import PropTypes from 'prop-types'

const JobRole = ({ active, role, onClick }) => {
  return(
    <a
      href=""
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      <li className={active ? "active-role" : ""}>
        {role.name}
      </li>
    </a>
  );
}

JobRole.propTypes = {
  active: PropTypes.bool.isRequired,
  role: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export { JobRole }
