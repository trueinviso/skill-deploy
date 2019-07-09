FactoryBot.define do
  factory :subscription, class: Unity::Subscription do
    association :subscription_plan
  end
end
