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
      send_apply_notification
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

  def send_apply_notification
    SendgridManager.send(
      job.user.email,
      SendgridManager::TEMPLATE_IDS[:apply_notification],
      dynamic_template_data,
    )
  end

  def dynamic_template_data
    {
      name: current_user.first_name,
      headline: job.name,
      about: job.description&.body&.to_plain_text,
      skills: current_user.skills,
      avatar_url: current_user.thumbnail_url,
      profile_url: employer_user_profile_url(current_user),
      website_url: root_url,
    }
  end
end
