if (Rails.env.production? || Rails.env.staging?) && ENV["MAILTRAP_CATCH_MAIL"] != "true"
  Rails.application.configure do
    config.action_mailer.delivery_method = :sendgrid_actionmailer
    config.action_mailer.sendgrid_actionmailer_settings = {
      api_key: ENV["SENDGRID_WEB_API_KEY"],
      raise_delivery_errors: false
    }
  end
end
