class EmployerMailer < ApplicationMailer
  default from: "arthur@kswindustries.co"
  default body: "not used"

  def job_listing_publish_notification(job)
    @job = job
    @user = @job.user

    mail(
      to: @user.email,
      subject: "You job is now live!",
    )
  end

  def job_listing_talent_apply_notification(job, talent)
    mail(
      to: job.user.email,
      subject: "",
      template_id: ENV.fetch("SENDGRID_SEND_JOB_LISTING_APPLY_NOTIFICATION_TEMPLATE"),
      dynamic_template_data: {
          name: talent.first_name,
          headline: job.name,
          about: job.description&.body&.to_plain_text,
          skills: talent.skills,
          avatar_url: talent.thumbnail_url,
          profile_url: employer_user_profile_url(talent),
          website_url: root_url })
  end
end
