module Employer
  class MessagesController < ApplicationController
    before_action :applied_for, only: :create

    def create
      if message.save
        send_message_notification
        flash[:notice] = t(".success")
      else
        flash[:notice] = t(".failure")
      end

      redirect_to employer_applicant_path(applied_for)
    end

    private

    def applied_for
      @applied_for ||= AppliedFor
        .find(params[:applied_for_id])
    end

    def message_params
      params
        .require(:message)
        .permit(:body)
    end

    def message
      @message ||= Message.new(
        message_params.merge(
          sender: current_user,
          recipient: applied_for.user,
        )
      )
    end

    def send_message_notification
      SendgridManager.send(
        message.recipient.email,
        SendgridManager::TEMPLATE_IDS[:recruiter_message],
        dynamic_template_data,
      )
    end

    def dynamic_template_data
      {
        name: message.recipient.first_name,
        avatar_url: message.recipient.thumbnail_url,
        profile_url: employer_applicant_path(applied_for),
        company_logo: applied_for.job.thumbnail_url,
        company_name: applied_for.job.company_name,
        body: message.body,
        website_url: root_url,
        reply_email: message.sender.email,
        reply_name: message.sender.first_name,
      }
    end
  end
end
