class ApiController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  # acts_as_token_authentication_handler_for User

  include Pundit
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  private

  def user_not_authorized
    render json: { errors: "Unauthorized" }, status: :unauthorized
  end

  def not_found
    render json: { errors: "Not found" }, status: :not_found
  end
end
