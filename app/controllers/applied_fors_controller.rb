class AppliedForsController < ApplicationController
  before_action :job, only: :create

  def create
    authorize(job, policy_class: AppliedForPolicy)

    if applied_for.save
      send_apply_notification
      send_apply_confirmation
      flash[:banner_message] = t(".success")
    else
      flash[:banner_message] = t(".failure")
    end

    redirect_to job_path(job)
  end

  private

  def applied_for
    @applied_for ||= AppliedFor.new(user: current_user, job: job)
  end

  def job
    @job ||= Job.find(params[:job_id])
  end

  def send_apply_notification
    SendgridManagerWorker
      .perform_async(apply_notification_data)
  end

  def apply_notification_data
    SendgridTemplateData
      .call(:apply_notification, current_user, job, applied_for)
  end

  def send_apply_confirmation
    SendgridManagerWorker
      .perform_async(apply_notification_data)
  end

  def apply_confirmation_data
    SendgridTemplateData
      .call(:apply_confirmation, current_user, job)
  end
end
