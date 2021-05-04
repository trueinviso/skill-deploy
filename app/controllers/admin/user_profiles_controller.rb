# frozen_string_literal: true

module Admin
  class UserProfilesController < ApplicationController
    before_action :user_profile, only: :update

    def update
      user_profile.assign_attributes(status_param)
      authorize [:admin, user_profile]
      user_profile.save!
      send_welcome_email if user_profile.approved?
      head :ok, content_type: "text/html"
    end

    private

    def user_profile
      @user_profile ||= UserProfile.find(params[:id])
    end

    def status_param
      params.require(:user_profile).permit(:status)
    end

    def send_welcome_email
      TalentMailer.with(user: user_profile.user)
                  .welcome
                  .deliver_later
    end
  end
end
