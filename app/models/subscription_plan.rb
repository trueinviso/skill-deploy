class SubscriptionPlan < ApplicationRecord
  has_many :subscriptions

  UNLIMITED = -"price_1JMbjFFDKcWTEs2FaGE59zax"

  def unlimited?
    gateway_id == UNLIMITED
  end
end
