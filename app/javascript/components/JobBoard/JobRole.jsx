import React from 'react'
import PropTypes from 'prop-types'

const JobRole = ({ active, role, setActiveRole }) => {
  return(
    <a
      href=""
      onClick={setActiveRole}
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
  setActiveRole: PropTypes.func.isRequired
}

export { JobRole }
