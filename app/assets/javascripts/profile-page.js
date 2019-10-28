var profilePage = (function(d, formValidator, validator) {
  const validate = values => {
    const { user } = values;
    const errors = { user: {} };

    if (user && !user.email) {
      errors.user["email"] = "Required";
    }
    if (user && user.email && !validator.isEmail(user.email)) {
      errors.user["email"] = "Email is not valid";
    }

    if (user && !user.password) {
      errors.user["password"] = "Required";
    }
    if (user && !user.current_password) {
      errors.user["current_password"] = "Required";
    } else if (user && user.current_password === user.password) {
      errors.user["current_password"] = "Password should be different";
    }

    return errors;
  };

  formValidator.registerForm("profileEditForm", {
    validate,
    initialValues: {
      user: {}
    }
  });
})(document, window.formValidator, window.validator);
