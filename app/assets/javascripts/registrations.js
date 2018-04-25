// Registration javascript
function validateSubdomain() {
  return validator.validate_presence('#user_account_attributes_subdomain') &&
    validator.validate_subdomain_format('#user_account_attributes_subdomain');
}

function validateFirstName() {
  return validator.validate_presence('#user_first_name');
}

function validateLastName() {
  return validator.validate_presence('#user_last_name');
}

function validateEmail() {
  return validator.validate_presence('#user_email') &&
    validator.validate_email_format('#user_email');
}

function validateCompany() {
  return validator.validate_presence('#user_account_attributes_company');
}

function validatePassword() {
  return validator.validate_presence('#user_password') &&
    validator.validate_min_length('#user_password', 6);
}

function validatePasswordConfirmation() {
  return validator.validate_presence('#user_password_confirmation') &&
    validator.validate_min_length('#user_password_confirmation', 6);
}

function validatePasswordsMatch() {
  return validator.validate_passwords_match('#user_password', '#user_password_confirmation');
}

function validRegistration() {
  return validateFirstName() &&
    validateLastName() &&
    validateEmail() &&
    validatePassword() &&
    validatePasswordConfirmation() &&
    validatePasswordsMatch() &&
    validateCompany() &&
    validateSubdomain();
}


function validateRegistration() {
  const submit = document.querySelector('input[type="submit"]');
  submit.disabled = true;

  if(validRegistration()) {
    return true;
  } else {
    submit.disabled = false;
    return false;
  }
}

function autoFillSubdomain() {
  subdomain = document.querySelector("#user_account_attributes_subdomain")
  company = document.querySelector("#user_account_attributes_company")
  subdomain.value = company.value.replace(/\s+/g, '-').toLowerCase();
}
