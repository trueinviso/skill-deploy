class Subscription < ApplicationRecord
  belongs_to :user
  belongs_to :subscription_plan

  enum gateway_status: [
    :active,
    :canceled,
    :past_due,
    :trialing,
    :unpaid,
  ]

  delegate :unlimited?, to: :subscription_plan
end
