this.validator = {
  validate_presence: function(id) {
    var is_valid;
    is_valid = document.querySelector(id).value.length > 0;
    this.set_red_border(is_valid, id);
    this.error_message_check(id, is_valid, 'This field is required');
    return is_valid;
  },
  validate_min_length: function(id, length) {
    var is_valid, value;
    value = document.querySelector(id).value;
    is_valid = value.length >= length;
    this.set_red_border(is_valid, id);
    this.error_message_check(id, is_valid, 'The minimum length is ' + length + ' characters');
    return is_valid;
  },
  validate_max_length: function(id, length) {
    var is_valid, value;
    value = document.querySelector(id).value;
    is_valid = value.length <= length;
    this.set_red_border(is_valid, id);
    this.error_message_check(id, is_valid, 'The maximum length is ' + length + ' characters');
    return is_valid;
  },
  validate_subdomain_format: function(id) {
    var VALID_SUBDOMAIN_REGEX, is_valid, value;
    VALID_SUBDOMAIN_REGEX = /^[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?$/;
    value = document.querySelector(id).value;
    is_valid = VALID_SUBDOMAIN_REGEX.test(value);
    this.set_red_border(is_valid, id);
    this.error_message_check(id, is_valid, 'Not a valid subdomain');
    return is_valid;
  },
  validate_email_format: function(id) {
    var VALID_EMAIL_REGEX, is_valid, value;
    VALID_EMAIL_REGEX = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    value = document.querySelector(id).value;
    is_valid = VALID_EMAIL_REGEX.test(value);
    this.set_red_border(is_valid, id);
    this.error_message_check(id, is_valid, 'Not a valid email');
    return is_valid;
  },
  validate_passwords_match: function(p_id, pc_id) {
    var is_valid, pcv, pv;
    pv = document.querySelector(p_id).value;
    pcv = document.querySelector(pc_id).value;
    is_valid = pv === pcv;
    this.set_red_border(is_valid, p_id);
    this.set_red_border(is_valid, pc_id);
    this.error_message_check(p_id, is_valid, "Passwords don't match");
    return is_valid;
  },
 	validate_acceptance_of: function(id) {
 	  var is_valid;
 	  is_valid = $(id).is(':checked');
 	  this.error_message_check(id, is_valid, 'You must accept terms and conditions.');
 	  return is_valid;
 	},
 	set_red_border: function(is_valid, id) {
 	  if (is_valid) {
 	    return this.remove_red_border(id);
 	  } else {
 	    return this.add_red_border(id);
 	  }
 	},
 	add_red_border: function(id) {
 	  return document.querySelector(id).style.borderColor = "red";
 	},
 	error_message_check: function(id, is_valid, message) {
 	  if (is_valid) {
 	    return this.hide_error_message(id);
 	  } else {
 	    return this.show_error_message(id, message);
 	  }
 	},
 	show_error_message: function(id, message) {
 	  var selector;
 	  selector = document.querySelector(id + '-error');
 	  selector.innerHTML = message;
 	  return selector.display = "block";
 	},
 	hide_error_message: function(id) {
 	  var selector;
 	  selector = document.querySelector(id + '-error');
 	  selector.innerHTML = "";
 	  return selector.display = "none";
 	},
 	remove_red_border: function(id) {
 	  return document.querySelector(id).style.borderColor = "black";
 	}
};
