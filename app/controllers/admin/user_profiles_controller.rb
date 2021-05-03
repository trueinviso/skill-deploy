# frozen_string_literal: true

module Admin
  class UserProfilesController < ApplicationController
    before_action :load_user_profile, only: :update

    def update
      @user_profile.assign_attributes(status_param)
      authorize [:admin, @user_profile]
      @user_profile.save
      head :ok, content_type: "text/html"
    end

    private

    def load_user_profile
      @user_profile = UserProfile.find(params[:id])
    end

    def status_param
      params.require(:user_profile).permit(:status)
    end
  end
end
