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
    controller_name == "user_profiles"
  end

  def subscription_page?
    controller_name == "subscription"
  end

  def manage_job_listing_path(user)
    user.talent? ? main_app.new_profile_subscription_path : main_app.employer_jobs_path
  end

  def create_listing_page?
    current_page?(main_app.new_employer_job_path)
  end

  def edit_listing_page?
    controller_path == "employer/jobs" && action_name == "edit"
  end

  def employer_preview_job_path?
    controller_path == "employer/preview/jobs" && action_name == "show"
  end

  def subscription_page?
    controller_name == "subscription"
  end

  def photo_uploader_field(record, field_name = nil)
    type = record.class.name.underscore
    field_name ||= "#{type}[thumbnail_attributes][file]"

    thumbnail = record.thumbnail_url

    react_component("PhotoUploader", thumbnail: thumbnail, record: record, type: type, name: field_name)
  end

  def manage_job_listing_path(user)
    user.talent? ? main_app.new_profile_subscription_path : main_app.employer_jobs_path
  end

  def current_page_title
    if current_page?(main_app.edit_user_profile_path)
      'Profile'
    elsif employer_jobs_page?
      'Manage Listings'
    elsif saved_jobs_page?
      'Saved Job Listings'
    elsif edit_profile_page?
      'Account Settings'
    elsif current_page?(unity.edit_subscription_path)
      'Billing Details'
    elsif current_page?(main_app.root_path)
      'Job Board'
    end
  end
end

