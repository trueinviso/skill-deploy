module Employer
  class MessagesController < ApplicationController
    before_action :applied_for, only: :create

    def create
      @message = Message.new(message_params)
      if @message.save
        send_message_notification(@message)
        flash[:notice] = t(".success")
      else
        flash[:notice] = t(".failure")
      end
      redirect_to employer_user_profile_url(@profile)
    end

    private

    def applied_for
      @applied_for = AppliedFor.find(params[:appllied_for_id])
    end

    def message_params
      params.require(:message).permit(:body)
    end

    def send_message_notification(_message)
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
