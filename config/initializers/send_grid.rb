if (Rails.env.production? || Rails.env.staging?) && ENV["MAILTRAP_CATCH_MAIL"] != "true"
  ActionMailer::Base.delivery_method = :smtp
  ActionMailer::Base.smtp_settings = {
    user_name: ENV.fetch("SENDGRID_USERNAME"),
    password: ENV.fetch("SENDGRID_PASSWORD"),
    domain: "heyfam.com",
    address: "smtp.sendgrid.net",
    port: 465,
    authentication: :plain,
    enable_starttls_auto: true,
  }
end
