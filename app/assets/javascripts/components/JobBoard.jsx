class JobBoard extends React.Component {
  render() {
    const { roles, types, link } = this.props
    return <JobFilters roles={roles} types={types} link={link} />
  }
}

function JobFilters(props) {
  return(
    <ul>
      <JobRoleList roles={props.roles} link={props.link} />
      <JobTypeList types={props.types} link={props.link} />
    </ul>
  );
}

function JobRoleList(props) {
  function renderRole(link, role, onClick) {
    const role_link = `${link}?job_role_name=${role.name}`
    return <JobRole key={role.id} link={role_link} role={role} onClick={onClick} />
  }

  return(
    props.roles.map((role) => {
      return renderRole(props.link, role, () => {})
    })
  );
}

function JobRole(props) {
  const active = window.location.href.indexOf(props.role.name) !== -1

  return(
    <li className={active ? "active-role" : ""}>
      <a href={props.link} onClick={props.onClick}>
        {props.role.name}
      </a>
    </li>
  );
}

function JobTypeList(props) {
  function renderType(link, type, onClick) {
    const type_link = `${link}?job_type_name=${type.name}`
    return <JobType key={type.id} link={type_link} type={type} onClick={onClick} />
  }

  return(
      props.types.map((type) => {
        return renderType(props.link, type, () => {})
      })
  );
}

function JobType(props) {
  const active = window.location.href.indexOf(props.type.name) !== -1

  return(
    <li className={active ? "active" : ""}>
      <a href={props.link} onClick={props.onClick}>
        {props.type.name}
      </a>
    </li>
  );
}

function Job(props) {
}

class JobList extends React.Component {
}
