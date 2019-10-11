class ApplicationController < ActionController::Base
  include BasicAuth

  protect_from_forgery with: :exception
  include Pundit

  before_action :guard_user_authenticated!, unless: :devise_controller?
  before_action :guard_user_registered!, unless: :devise_controller?
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  # Available from Devise engine
  def after_sign_in_path_for(resource)
    return [:new, :session] unless user_signed_in?

    stored_location_for(resource) || Receptionist.new(resource).direct
  end

  private

  def guard_user_authenticated!
    redirect_to [:new, :user, :registration] if !user_signed_in?
  end

  def guard_user_registered!
    redirect_to [:join_us] if !current_user.registered?
  end

  def user_not_authorized
    redirect_to(request.referrer || [:root])
  end
end
