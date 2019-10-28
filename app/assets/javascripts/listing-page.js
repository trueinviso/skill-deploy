var listingPage = (function(formValidator, validator) {
  const validate = values => {
    const errors = { job: {} };
    const { job } = values;

    if (!job.name) {
      errors.job["name"] = "Required";
    }
    if (!job.company_name) {
      errors.job["company_name"] = "Required";
    }

    if (!job.location) {
      errors.job["location"] = "Required";
    }
    if (!job.job_type_ids) {
      errors.job["job_type_ids"] = "Required";
    }

    if (!job.remote) {
      errors.job["remote"] = "Required";
    }
    if (!job.job_role_ids) {
      errors.job["job_role_ids"] = "Required";
    }
    if (!job.job_experience_ids) {
      errors.job["job_experience_ids"] = "Required";
    }

    if (job.company_website && !validator.isURL(job.company_website)) {
      errors.job["company_website"] = "Invalid link";
    }
    if (job.twitter && !validator.isURL(job.twitter)) {
      errors.job["twitter"] = "Invalid link";
    }

    if (job.instagram && !validator.isURL(job.instagram)) {
      errors.job["instagram"] = "Invalid link";
    }
    if (job.facebook && !validator.isURL(job.facebook)) {
      errors.job["facebook"] = "Invalid link";
    }

    return errors;
  };

  formValidator.registerForm("listingForm", {
    validate,
    initialValues: {
      job: {}
    }
  });
})(window.formValidator, window.validator, document);
