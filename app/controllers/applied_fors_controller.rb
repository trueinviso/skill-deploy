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
      job_listing_name: job.name,
      about: job.description&.body&.to_plain_text,
      skills: skills,
      website_url: job.company_website,
      logo_url: job.thumbnail_url,
    }
  end

  def skills
    [
      job.job_roles.first&.name,
      job.job_types.first&.name,
      job.job_experiences.first&.name,
      job.job_locations.first&.name,
    ]
  end
end
