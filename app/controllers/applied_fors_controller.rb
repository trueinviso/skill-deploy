class AppliedForsController < ApplicationController
  before_action :job, only: :create

  def index
    authorize Job
    @jobs = JobsSerializer.build(
      current_user,
      AppliedJobsQuery.new(current_user),
    )
  end

  def create
    authorize(applied_for)
    if applied_for.save
      send_job_listing_talent_apply_notification
      flash[:notice] = t(".success")
    else
      flash[:notice] = t(".failure")
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

  def send_job_listing_talent_apply_notification
    EmployerMailer.job_listing_talent_apply_notification(job, current_user).deliver_later
  end
end
