
//{
//  type: constants.SET_ACTIVE_ROLE,
//  payload: {
//    name: "Development"
//  }
//}
const setActiveRole = function setActiveRole(name) {
  console.log("ACTIVE ROLE");
  return(
    {
      type: constants.SET_ACTIVE_ROLE,
      payload: {
        name: name
      }
    }
  );
}

const setActiveType = function setActiveType(name) {
  return(
    {
      type: constants.SET_ACTIVE_TYPE,
      payload: {
        name: name
      }
    }
  );
}
