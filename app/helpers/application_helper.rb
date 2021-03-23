module ApplicationHelper
  def employer_jobs_page?
    current_page?(main_app.employer_jobs_path)
  end

  def edit_profile_page?
    current_page?(main_app.edit_user_registration_path)
  end

  def edit_social_profile_page?
    current_page?(main_app.edit_profile_social_path)
  end

  def edit_notifications_page?
    current_page?(main_app.edit_profile_notifications_path)
  end

  def saved_jobs_page?
    current_page?(main_app.favorite_jobs_path)
  end

  def applied_fors_page?
    current_page?(main_app.applied_fors_path)
  end

  def employer_billing_page?
    current_page?(main_app.edit_employer_billing_path)
  end

  def account_page?
    controller_name == 'user_profiles'
  end

  # FIXME: should be fixed in a right way
  def talent?
    current_user.roles.find_by(id: 2)
  end
end
