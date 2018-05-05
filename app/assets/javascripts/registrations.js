// Registration javascript
function validateSubdomain(id) {
  return validator.validate_presence(id) &&
    validator.validate_subdomain_format(id);
}

function validatePresence(id) {
  return validator.validate_presence(id);
}

function validateEmail(id) {
  return validator.validate_presence(id) &&
    validator.validate_email_format(id);
}

function validatePassword(id) {
  return validator.validate_presence(id) &&
    validator.validate_min_length(id, 6);
}

function validatePasswordsMatch(first, second) {
  return validator.validate_passwords_match(first, second);
}

function validRegistration() {
  inputs = document.querySelectorAll(
    'input[type=text], input[type=password], input[type=email]'
  );
  for(i = 0; i < inputs.length; i++) {
    input = inputs[i]
    switch(input.type) {
      case "email":
        if(!validateEmail('#' + input.id)) return false;
        break;
      case "password":
        if(!validatePassword('#' + input.id)) return false;
        break;
      default:
        if(!validatePresence('#' + input.id)) return false;
        break;
    }
  }
  return validatePasswordsMatch('#user_password', '#user_password_confirmation');
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
