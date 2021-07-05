module Employer
  class MessagesController < ApplicationController
    before_action :applied_for, only: :create
    before_action :validate_applied_for, only: :create

    def create
      authorize [:employer, message]

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
        .find_by(id: params[:applied_for_id])
    end

    def validate_applied_for
      if applied_for.blank?
        flash[:error] = "This user has not applied to your job listing!"
        redirect_to employer_user_profile_path(params[:applied_for_id])
      end
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
      SendgridManagerWorker.perform_async(email_data)
    end

    def email_data
      SendgridTemplateData
        .call(:message, message, applied_for)
    end
  end
end
