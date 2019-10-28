var editUserPage = (function(formValidator, validator, d) {
  const validate = values => {
    const errors = {
      user: {
        user_profile_attributes: {},
        social_media_profile_attributes: {}
      }
    };

    // const userProfileErrors = errors.user.user_profile_attributes;
    const social = errors.user.social_media_profile_attributes;
    const socialValues = values.user.social_media_profile_attributes;

    if (socialValues.website && !validator.isURL(socialValues.website)) {
      social["website"] = "Invalid link";
    }
    if (socialValues.twitter && !validator.isURL(socialValues.twitter)) {
      social["twitter"] = "Invalid link";
    }

    if (socialValues.instagram && !validator.isURL(socialValues.instagram)) {
      social["instagram"] = "Invalid link";
    }
    if (socialValues.facebook && !validator.isURL(socialValues.facebook)) {
      social["facebook"] = "Invalid link";
    }

    return errors;
  };

  formValidator.registerForm("editUser", {
    validate,
    initialValues: {
      user: {
        user_profile_attributes: {},
        social_media_profile_attributes: {}
      }
    }
  });
})(window.formValidator, window.validator, document);
