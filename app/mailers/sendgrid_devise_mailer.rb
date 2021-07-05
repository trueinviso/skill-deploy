class SendgridDeviseMailer < Devise::Mailer
  helper :application
  include Devise::Controllers::UrlHelpers

  def password_change(record, _opts = {})
    data = SendgridTemplateData
      .call(:password_change, record)

    SendgridManagerWorker.perform_async(data)
  end

  def reset_password_instructions(record, token, _opts = {})
    data = SendgridTemplateData
      .call(:reset_password_instructions, record, token)

    SendgridManagerWorker.perform_async(data)
  end

  def confirmation_instructions(record, token, _opts = {})
    url = confirmation_url(record, confirmation_token: token)
    data = SendgridTemplateData
      .call(:confirmation_instructions, record, url)

    SendgridManagerWorker.perform_async(data)
  end
end
