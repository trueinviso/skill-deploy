module Employer
  class MessagesController < ApplicationController
    before_action :applied_for, only: :create

    def create
      @message = message
      if @message.save
        send_message_notification
        flash[:notice] = t(".success")
      else
        flash[:notice] = t(".failure")
      end
      redirect_to employer_applied_for_path(applied_for)
    end

    private

    def applied_for
      @applied_for ||= AppliedFor.find(params[:applied_for_id])
    end

    def message_params
      params.require(:message).permit(:body)
    end

    def message
      @message || Message.new(message_params.merge(sender: current_user,
                                                   recipient: applied_for.user))
    end

    def send_message_notification
      TalentMailer.send_employer_message(message, applied_for).deliver_later
    end
  end
end
