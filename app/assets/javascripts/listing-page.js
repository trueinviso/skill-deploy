var listingPage = (function(d, validator) {
  /**
   *
   * @param {*} id
   */
  function validateLink(id) {
    if (validator.validate_is_empty(id)) {
      validator.clear(id);
      validateSubmitButton();
      return true;
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
   * @param {*} errors, form
   */
  function validateTextFields(errors, form) {
    const REQUIRED_FIELDS_IDS = [
      "role",
      "company_name",
      "description",
      "location"
    ];

    const formElements = Array.from(form.elements).concat(
      d.querySelector("trix-editor")
    );

    Array.from(formElements)
      .filter(el => el.tagName !== "BUTTON")
      .filter(inputEl => inputEl.type !== "hidden")
      .forEach(el => {
        const id = el.id;
        if (REQUIRED_FIELDS_IDS.includes(id)) {
          errors.push(!validator.validate_presence(`#${id}`));
        }
      });
  }

  function validateUrlFields(errors) {
    const REQUIRED_IDS = [
      "company_website",
      "twitter",
      "instagram",
      "facebook"
    ];

    REQUIRED_IDS.forEach(id => errors.push(!validateLink(`#${id}`)));
  }
  /**
   *
   * @param {*} errors
   */
  function validateRadioFields(errors) {
    const REQUIRED_FIELDS_CLASSES = [
      "job_role",
      "job_remote",
      "job_type",
      "job_experience"
    ];

    REQUIRED_FIELDS_CLASSES.forEach(className => {
      const els = d.querySelectorAll(`.${className}`);
      let isChecked = false;

      if (els.length === 0) return;

      els.forEach(el => {
        if (el.checked === true) isChecked = true;
      });

      if (isChecked) {
        validator.hide_error_message(`#${className}`);
        errors.push(false);
      } else {
        validator.show_error_message(`#${className}`, "This field is required");
        errors.push(true);
      }
    });
  }

  /**
   *
   * @param {*} form
   */
  function validate(form) {
    const errors = [];
    validateTextFields(errors, form);
    validateRadioFields(errors);
    validateUrlFields(errors);
    console.log(errors);
    return !errors.some(er => er === true);
  }
  /**
   *
   * @param {*} e
   */
  function validateForm(e) {
    const isValid = validate(e);

    console.log("isValida", isValid);

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
