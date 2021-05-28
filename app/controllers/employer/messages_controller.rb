module Employer
  class MessagesController < ApplicationController
    before_action only: :create

    def create
      @profile = UserProfile.find(params[:profile_id])
      if params[:message][:body]
        send_message_notification(params[:message][:body])
        redirect_to employer_user_profile_url(@profile)
      end
    end

    private

    def send_message_notification(body)
      SendgridManager.send(current_user.email,
                           ENV["SENDGRID_RECRUITER_MESSAGE_TO_THE_TALENT_TEMPLATE"],
                           { name: @profile.first_name,
                             avatar_url: "",
                             profile_url: employer_user_profile_url(@profile),
                             company_logo: current_user.thumbnail_url,
                             company_name: current_user.first_name,
                             body: body,
                             website_url: main_app.root_url,
                             reply_email: current_user.email,
                             reply_name: current_user.first_name })
    end
  end
end
