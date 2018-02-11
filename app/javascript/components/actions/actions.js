const constants = {
  SET_ACTIVE_ROLE: "SET_ACTIVE_ROLE",
  SET_ACTIVE_TYPE: "SET_ACTIVE_TYPE"
}

function setActiveRole(name) {
  return(
    {
      type: constants.SET_ACTIVE_ROLE,
      payload: {
        name: name
      }
    }
  );
}

function setActiveType(name) {
  return(
    {
      type: constants.SET_ACTIVE_TYPE,
      payload: {
        name: name
      }
    }
  );
}

export { setActiveRole, constants, setActiveType }
