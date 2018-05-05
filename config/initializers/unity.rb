require "unity"

Unity.configure do |config|
  config.stripe_secret_key = ENV.fetch("STRIPE_SECRET_KEY")
  config.stripe_publishable_key = ENV.fetch("STRIPE_PUBLISHABLE_KEY")
  config.gateway_type = :stripe
end
