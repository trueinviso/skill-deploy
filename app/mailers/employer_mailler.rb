class EmployerMailer < ApplicationMailer
  default from: "team@skilldeploy.com"

  def job_listing_published_notification(user, job)
    @user = user
    @job = job

    mail(
      to: user.user_profile.email,
      subject: "You job is live now",
    )
  end

  def job_listing_talent_apply_notification(user, talent)
    @user = user
    @talent = talent

    mail(
      to: user.user_profile.email,
      subject: "Talent applied your job listing",
    )
  end
end