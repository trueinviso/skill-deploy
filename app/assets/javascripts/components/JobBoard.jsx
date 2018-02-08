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
    return <JobRole key={role.id} link={link} role={role} onClick={onClick} />
  }

  return(
    props.roles.map((role) => {
      return renderRole(props.link, role, () => {})
    })
  );
}


function JobTypeList(props) {
  function renderType(link, type, onClick) {
    return <JobType key={type.id} link={link} type={type} onClick={onClick} />
  }

  return(
      props.types.map((type) => {
        return renderType(props.link, type, () => {})
      })
  );
}


function Job(props) {
}

class JobList extends React.Component {
}
