class ApiController < ActionController::Base
  # acts_as_token_authentication_handler_for User

  # include Pundit
  # rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  private

  def user_not_authorized
    render json: "Not Authorized", status: :unathorized
  end
end
