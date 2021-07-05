module Employer
  class MessagesController < ApplicationController
    def create
      authorize [:employer, message]

      if message.save
        send_message_notification
        flash[:notice] = t(".success")
      else
        flash[:notice] = t(".failure")
      end

      redirect_to employer_jobs_path
    end

    private

    def applied_for
      @applied_for ||= AppliedFor.find_by(id: params[:applied_for_id])
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
          applied_for_id: params[:applied_for_id],
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
