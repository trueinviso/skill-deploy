class SendgridDeviseMailer < Devise::Mailer
  helper :application
  include Devise::Controllers::UrlHelpers

  def password_change(record, _opts = {})
    SendgridManager.send(
      record.email,
      TEMPLATE_IDS[:password_change],
      password_change_data(record),
    )
  end

  def reset_password_instructions(record, token, _opts = {})
    SendgridManager.send(
      record.email,
      TEMPLATE_IDS[:reset_password_instructions],
      reset_password_data(record, token),
    )
  end

  private


  def password_change_data(record)
    {
      name: record.first_name,
      brand_name: "Skill deploy",
      account_link: main_app.new_user_session_url,
      website_url: main_app.root_url,
    }
  end

  def reset_password_data(record, token)
    {
      name: record.first_name,
      reset_password_link: edit_password_url(record, reset_password_token: token),
      website_url: main_app.root_url,
    }
  end
end
