unless Rails.env.development? || Rails.env.test?
  Raven.configure do |config|
    config.sanitize_fields = Rails.application.config.filter_parameters.map(&:to_s)
    config.dsn = ENV.fetch("SENTRY_DSN")

    # By default, Sentry does not send POST data or cookies if present.
    # To re-enable, remove the respective processor from the chain:
    # config.processors -= [Raven::Processor::Cookies] # Removes the cookies filter
    config.processors -= [Raven::Processor::PostData] # Removes the PostData filter
  end
end
