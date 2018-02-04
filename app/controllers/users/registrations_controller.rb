module Users
  class RegistrationsController < Devise::RegistrationsController

    protected

    def after_update_path_for(resource)
      edit_user_registration_path
    end

    def account_update_params
      params
        .require(:user)
        .permit(
          :email,
          :username,
          :current_password,
          :password,
          :password_confirmation,
          user_profile_attributes: [:first_name, :last_name],
          thumbnail_attributes: [:file],
        )
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
