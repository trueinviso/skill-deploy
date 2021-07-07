class SubscriptionSyncerWorker
  include Sidekiq::Worker

  def perform(subscription_id)
    return if subscription_id.blank?

    subscription = Unity::Subscription.find(subscription_id)
    SubscriptionSyncer.new(subscription).call
  end
end
