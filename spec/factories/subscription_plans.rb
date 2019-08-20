FactoryBot.define do
  factory :subscription_plan, class: Unity::SubscriptionPlan do
    name { Faker::Internet::user_name }
  end
end
