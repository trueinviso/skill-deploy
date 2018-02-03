module Profile
  class NotificationsController < ApplicationController
    def update
      user_profile = current_user.user_profile
      if user_profile.update(user_profile_params)
        redirect_to edit_profile_notifications_path
      else
        render "edit"
      end
    end

    def edit
      @user_profile = current_user.user_profile
    end

    private

    def user_profile_params
      params.require(:user_profile)
        .permit(:update_notifications, :weekly_newsletter)
    end
  end
end
