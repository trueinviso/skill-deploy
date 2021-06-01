class SendgridDeviseMailer < Devise::Mailer
  helper :application
  include Devise::Controllers::UrlHelpers

  def password_change(record, _opts = {})
    SendgridManager.send(record.email, ENV["SENDGRID_EMAIL_CHANGED_TEMPLATE"],
                         { name: record.first_name,
                           brand_name: "Skill deploy",
                           account_link: main_app.new_user_session_url,
                           website_url: main_app.root_url })
  end

  def reset_password_instructions(record, token, _opts = {})
    SendgridManager.send(record.email, ENV["SENDGRID_RESET_PASSWORD_INSTRUCTIONS_TEMPLATE"],
                         { name: record.first_name,
                           reset_password_link: edit_password_url(record,
                                                                  reset_password_token: token),
                           website_url: main_app.root_url })
  end
end
