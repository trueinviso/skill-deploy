class EmployerMailer < ApplicationMailer
  default from: "team@skilldeploy.com"

  def job_listing_publish_notification(job)
    @job = job
    @user = @job.user

    mail(
      to: @user.email,
      subject: "You job is now live!",
    )
  end

  def job_listing_talent_apply_notification(job, talent)
    @job = job
    @user = job.user
    @talent = talent

    mail(
      to: @user.email,
      subject: "Talent has applied to your job listing",
    )
  end
end
