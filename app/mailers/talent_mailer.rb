# frozen_string_literal: true

class TalentMailer < ApplicationMailer
  default from: ENV.fetch("TALENT_MAILER_FROM_EMAIL")
  default body: "not used"

  def welcome(user)
    @user = user

    mail(
      to: @user.email,
      subject: "",
    )
  end

  def send_employer_message(message, applied_for)
    mail(
      to: message.recipient.email,
      subject: "",
      template_id: ENV.fetch("SENDGRID_RECRUITER_MESSAGE_TO_THE_TALENT_TEMPLATE"),
      dynamic_template_data: {
        name: message.recipient.first_name,
        avatar_url: message.recipient.thumbnail_url,
        profile_url: employer_applied_for_url(applied_for),
        company_logo: applied_for.job.thumbnail_url,
        company_name: applied_for.job.company_name,
        body: message.body,
        website_url: root_url,
        reply_email: message.sender.email,
        reply_name: message.sender.first_name })
  end
end
