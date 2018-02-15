require "unity"

Unity::BraintreeGateway.configure_braintree(
  environment: :sandbox,
  # merchant_id: ENV["HF_BT_MERCHANT_ID"],
  # public_key: ENV["HF_BT_PUBLIC_KEY"],
  # private_key: ENV["HF_BT_PRIVATE_KEY"],
  merchant_id: ENV["BT_MERCHANT_ID"],
  public_key: ENV["BT_PUBLIC_KEY"],
  private_key: ENV["BT_PRIVATE_KEY"],
)
