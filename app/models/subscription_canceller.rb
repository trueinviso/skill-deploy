class SubscriptionCanceller
  attr_reader :user

  def initialize(user)
    @user = user
  end

  def self.call!(user)
    new(user).call
  end

  def call
    cancel
  end

  private

  def cancel
    local_subscription = unlimited_subscription
    raise NoSubscriptionToCancelError unless local_subscription.present?
    subscription = Stripe::Subscription.retrieve(
      local_subscription.gateway_id
    )
    subscription.delete(at_period_end: true)
  end

  def unlimited_subscription
    user.unlimited_subscription
  end

  class NoSubscriptionToCancelError < StandardError; end
end
