module Profile
  class NotificationsController < ApplicationController
    def update
      @user_profile = current_user.user_profile
      @user_profile.update(user_profile_params)
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
