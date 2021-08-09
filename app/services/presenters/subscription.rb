module Presenters
  class Subscription
    attr_reader :stripe_subscription

    def initialize(stripe_subscription)
      @stripe_subscription = stripe_subscription
    end

    def subscription_name
      Unity::SubscriptionPlan
        .find_by(gateway_id: ::SubscriptionPlan::UNLIMITED)
        .name
    end

    def price
      "$#{"%.2f" % (stripe_subscription.result.plan.amount / 100.0)} / month"
    end

    def renew_date
      "30 days"
    end

    def purchase_date
      Time.at(stripe_subscription.result.start_date).strftime("%B %d, %Y")
    end

    def amount_paid
      "$#{"%.2f" % (stripe_subscription.result.plan.amount / 100.0)}"
    end
  end
end
