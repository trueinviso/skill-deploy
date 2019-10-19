function validateWebsiteLink(id) {
  if (validator.validate_is_empty(id)) {
    validator.clear(id);
    validateSubmitButton();
  } else {
    const isValid = validator.validate_website_url(id);
    validateSubmitButton();
    return isValid;
  }
}

function validateSubmitButton() {
  const submit = document.getElementById("edit-profile");
  const errorsNodes = document.querySelectorAll(".error-message");
  const errors = Array.prototype.slice.call(errorsNodes);
  submit.disabled = errors.some(error => error.dataset.hasError === "1");
}
