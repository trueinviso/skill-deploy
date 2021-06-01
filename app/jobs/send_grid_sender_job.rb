class SendGridSenderJob < ApplicationJob
  include Rails.application.routes.url_helpers
  default_url_options[:host] = ENV["MAILER_DEFAULT_URL_HOST"]
  queue_as :mailers

  def perform(message, applied_for)
    SendgridManager.send(message.recipient.email,
                         ENV["SENDGRID_RECRUITER_MESSAGE_TO_THE_TALENT_TEMPLATE"],
                         { name: message.recipient.first_name,
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
