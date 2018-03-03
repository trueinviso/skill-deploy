class SubscriptionPlan < ApplicationRecord
  has_many :subscriptions

  SINGLE = -"heyfam_single_project"
  UNLIMITED = -"heyfam_unlimited_monthly"

  def single?
    gateway_id == SINGLE
  end

  def unlimited?
    gateway_id == UNLIMITED
  end
end
