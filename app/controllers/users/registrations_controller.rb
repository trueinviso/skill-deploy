module Users
  class RegistrationsController < Devise::RegistrationsController
    def create
      byebug
      super
    end

    def sign_up_params
      params
        .require(:user)
        .permit(
          :email,
          :username,
          :password,
          :password_confirmation,
          user_profile_attributes: [:first_name, :last_name],
          user_roles_attributes: [:role_id],
        )
    end
  end
end
