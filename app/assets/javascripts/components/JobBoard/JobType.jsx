function JobType(props) {
  const params = new URLSearchParams(window.location.search)
  const type_param = params.get("job_type_name")
  const role_param = params.get("job_role_name")
  const active = type_param == props.type.name

  function link() {
    let link = `${props.link}?`
    const amp = type_param == props.type.name ? "" : "&"

    // if the type is in the url, then the next click turns this filter off
    if(type_param !== props.type.name ) link = `${link}job_type_name=${props.type.name}`
    // add role to query params if it's present
    if(role_param) link = `${link}${amp}job_role_name=${role_param}`
    return link;
  }

  function activeClass(name) {
    className = ""
    switch(name) {
      case "Full Time": className = "active-full-time"
                        break;
      case "Part Time": className = "active-part-time"
                        break;
      case "Freelance": className = "active-freelance"
                        break;
    }
    return className
  }

  return(
    <li className={active ? activeClass(props.type.name) : ""}>
      <a href={link()} onClick={props.onClick}>
        {props.type.name}
      </a>
    </li>
  );
}
