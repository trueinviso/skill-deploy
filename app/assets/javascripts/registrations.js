var registrationPage = (function(formValidator, validator, d) {
  const validate = values => {
    const errors = {
      user: {
        user_profile_attributes: {}
      }
    };

    const profileValues = values.user.user_profile_attributes;
    const profileErrors = errors.user.user_profile_attributes;
    if (!profileValues.first_name) {
      profileErrors.first_name = "This field is required";
    }
    if (!profileValues.last_name) {
      profileErrors.last_name = "This field is required";
    }
    if (!values.user.email) {
      errors.user.email = "This field is required";
    }
    if (values.user.email && !validator.isEmail(values.user.email)) {
      errors.user.email = "Invalid email";
    }
    if (!values.user.password) {
      errors.user.password = "This field is required";
    }
    if (
      values.user.password &&
      !validator.isLength(values.user.password, { min: 6 })
    ) {
      errors.user.password = "Password is too short (minimum is 6 characters)";
    }
    console.log("va", values);
    return errors;
  };
  formValidator.registerForm("userRegistration", {
    validate,
    initialValues: {
      user: {
        user_profile_attributes: {}
      }
    }
  });
})(window.formValidator, window.validator, document);
