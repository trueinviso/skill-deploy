class GatewaySubscription
  attr_reader :user, :subscription
  def initialize(user)
    @user = user
    fetch
  end

  def plan_name
    subscription
      .plan
      .nickname
  end

  def cancelled_at
    subscription.canceled_at
  end

  def plan_amount
    subscription
      .plan
      .amount
  end

  def price
    plan_amount / 100
  end

  def cancel_at_period_end
    subscription.cancel_at_period_end
  end

  def expiration_date
    Time
      .at(subscription.current_period_end)
      .strftime("%B %d, %Y")
  end

  def fetch
    @subscription ||= Stripe::Subscription.retrieve(gateway_id)
  end

  def gateway_id
    user.
      subscription.
      gateway_id
  end
end