module ApplicationHelper
  def employer_jobs_page?
    current_page?(employer_jobs_path)
  end

  def edit_profile_page?
    current_page?(edit_user_registration_path)
  end

  def saved_jobs_page?
    current_page?(favorite_jobs_path)
  end
end
