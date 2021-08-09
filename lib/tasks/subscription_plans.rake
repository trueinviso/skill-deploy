namespace :subscription_plans do
  task populate: :environment do
    desc "Populate subscription plans"

    Unity::SubscriptionPlan.find_or_create_by!(
      gateway_id: ::SubscriptionPlan::UNLIMITED,
      name: "Unlimited Monthly Subscription",
      price: "150",
      period: "1",
      description: "Unlimited projects per month. For teams always looking for fresh talent. This plan renews every month.",
    )
  end
end
