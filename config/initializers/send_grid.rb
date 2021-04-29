if (Rails.env.production? || Rails.env.staging?) && ENV["MAILTRAP_CATCH_MAIL"] != "true"
  ActionMailer::Base.delivery_method = :smtp
  ActionMailer::Base.smtp_settings = {
    user_name: "apikey",
    password: ENV.fetch("SENDGRID_API_KEY"),
    domain: "heyfam.com",
    address: "smtp.sendgrid.net",
    port: 587,
    authentication: :plain,
    enable_starttls_auto: true,
  }
end
