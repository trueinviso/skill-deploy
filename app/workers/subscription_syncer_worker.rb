class SubscriptionSyncerWorker
  include Sidekiq::Worker

  def perform
    Unity::Subscription.all.each do |subscription|
      SubscriptionSyncer.new(subscription).call
    end
  end
end
