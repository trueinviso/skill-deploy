class SubscriptionSyncer
  attr_reader :subscription

  def initialize(subscription)
    @subscription = subscription
  end

  def call
    return if subscription.blank?
    sync_subscription
    remove_cancelled_subscription
  end

  private

  def sync_subscription
    subscription.update!(
      gateway_status: gateway_subscription.status,
      trial_ends_at: gateway_subscription.trial_end,
      cancellation_date: gateway_subscription.cancel_at,
      marked_for_cancellation_at: gateway_subscription.canceled_at,
    )
  end

  def gateway_subscription
    @gateway_subscription ||= Stripe::Subscription
      .retrieve(subscription.gateway_id)
  end

  def remove_cancelled_subscription
    if subscription.reload.canceled?
      subscription.destroy
    end
  end
end
