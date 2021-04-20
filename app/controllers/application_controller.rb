class ApplicationController < ActionController::Base
  include BasicAuth

  protect_from_forgery with: :exception
  include Pundit

  before_action :set_raven_context

  before_action :guard_user_authenticated!,
                :guard_user_registered!,
                :guard_user_profile_reviewed!, unless: :devise_controller?

  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  # Available from Devise engine

  def after_sign_in_path_for(resource)
    return [:new, :session] unless user_signed_in?

    stored_location_for(resource) || Receptionist.new(resource).direct
  end

  private

  def guard_user_profile_reviewed!
    return if registration_paths?

    if current_user.user_profile.pending?
      redirect_to profile_pending_review_path
    end
  end

  def registration_paths?
    controller_name == "join_us" ||
      controller_name == "user_profiles" ||
      controller_name == "thumbnails"
  end

  def guard_user_authenticated!
    redirect_to [:new, :user, :registration] if !user_signed_in?
  end

  def guard_user_registered!
    redirect_to [:join_us] if current_user.registering?
  end

  def user_not_authorized
    redirect_to(request.referrer || [:root])
  end

  def set_raven_context
    Raven.user_context(
      id: current_user.try(:id),
      email: current_user.try(:email),
    )

    Raven.extra_context(
      params: params.to_unsafe_h,
      url: request.url,
    )
  rescue => exception
    puts exception
  end
end
