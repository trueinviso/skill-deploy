var listingPage = (function(d, validator) {
  const REQUIRED_FIELDS_IDS = ["role", "company_name"];
  /**
   *
   * @param {*} id
   */
  function validateLink(id) {
    if (validator.validate_is_empty(id)) {
      validator.clear(id);
      validateSubmitButton();
    } else {
      const isValid = validator.validate_website_url(id);
      validateSubmitButton();
      return isValid;
    }
  }
  /**
   *
   * @param {*} id
   */
  function validatePresence(id) {
    validator.validate_presence(id);
    validateSubmitButton();
  }
  /**
   *
   */
  function hasErrors() {
    return Array.from(d.querySelectorAll(".error-message")).some(
      error => error.dataset.hasError === "1"
    );
  }

  function validateSubmitButton() {
    const submit = d.getElementById("button-submit");
    submit.disabled = hasErrors();
  }
  /**
   *
   * @param {*} e
   */
  function checkErrors(e) {
    validate(e);
    validateSubmitButton();
  }
  /**
   *
   * @param {*} form
   */
  function validate(form) {
    const errors = [];
    Array.from(form.elements)
      .filter(el => el.tagName !== "BUTTON")
      .filter(inputEl => inputEl.type !== "hidden")
      .forEach(el => {
        const id = el.id;
        if (REQUIRED_FIELDS_IDS.includes(id)) {
          errors.push(!validator.validate_presence(`#${id}`));
        }
      });

    const isCheckedRemote0 = d.getElementById("job_remote_0").checked === false;
    const isCheckedRemote1 = d.getElementById("job_remote_1").checked === false;

    if (isCheckedRemote0 && isCheckedRemote1) {
      validator.show_error_message("#job_remote", "This field is required");
      errors.push(true);
    } else {
      validator.hide_error_message("#job_remote");
      errors.push(false);
    }

    return !errors.some(er => er === true);
  }
  /**
   *
   * @param {*} e
   */
  function validateForm(e) {
    const isValid = validate(e);

    return isValid;
  }

  // return only public methods
  return {
    validateLink,
    validateForm,
    validatePresence,
    checkErrors
  };
})(document, validator);
