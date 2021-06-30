class AppliedForsController < ApplicationController
  before_action :job, only: :create

  def create
    authorize(applied_for)

    if applied_for.save
      send_apply_notification
      send_apply_confirmation
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
      apply_notification_data,
    )
  end

  def apply_notification_data
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

  def send_apply_confirmation
    SendgridManager.send(
      current_user.email,
      SendgridManager::TEMPLATE_IDS[:apply_confirmation],
      apply_confirmation_data,
    )
  end

  def apply_confirmation_data
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
