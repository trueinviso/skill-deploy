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
    @applied_for ||= AppliedFor.new(user: current_user, job: @job)
  end

  def job
    @job ||= Job.find(params[:job_id])
  end

  def send_job_listing_talent_apply_notification
    EmployerMailer.with(user: @job.user, talent: current_user)
                  .job_listing_talent_apply_notification
                  .deliver_later
  end
end
