const validator = rule => {
  const rules = {
    minLength: function (value, length) {
      return value.length >= length
    },
    maxLength: function (value, length) {
      return value.length <= length
    },
    subdomain: function (value) {
      const VALID_SUBDOMAIN_REGEX = /^[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?$/
      return VALID_SUBDOMAIN_REGEX.test(value)
    },
    email: function (value) {
      const VALID_EMAIL_REGEX = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
      return VALID_EMAIL_REGEX.test(value)
    },
    passwordsMatch: function (pwd, repeatPwd) {
      return pwd === repeatPwd
    },
    url: function (value) {
      const VALID_WEBSITE_REGEX = /https?:\/\/[^:\/]+/
      return VALID_WEBSITE_REGEX.test(value)
    }
  }

  return {
    validate: (...args) => {
      const fn = rules[rule]
      if (fn) {
        return fn(...args)
      }
    }
  }
}

export default validator
