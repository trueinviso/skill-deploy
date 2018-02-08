function JobRole(props) {
  const params = new URLSearchParams(window.location.search)
  const type_param = params.get("job_type_name")
  const role_param = params.get("job_role_name")
  const active = role_param == props.role.name

  function link() {
    let link = `${props.link}?`
    const amp = role_param == props.role.name ? "" : "&"

    // if the role is in the url, then the next click turns this filter off
    if(role_param !== props.role.name) link = `${link}job_role_name=${props.role.name}`
    // add role to query params if it's present
    if(type_param) link = `${link}${amp}job_type_name=${type_param}`
    return link;
  }

  return(
    <li className={active ? "active-role" : ""}>
      <a href={link()} onClick={props.onClick}>
        {props.role.name}
      </a>
    </li>
  );
}
