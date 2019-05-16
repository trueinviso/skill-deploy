module Employer
  class BillingComponent
    attr_reader :user

    def initialize(user)
      @user = user
    end

    def cancel_at_period_end
      subscription.cancel_at_period_end
    end

    def card
      @card ||= stripe_customer
        .sources
        .retrieve(stripe_customer.default_source)
    end

    def card_brand
      card.brand
    end

    def card_expiration_date
      "#{card.exp_month.to_s.rjust(2, "0")}/#{card.exp_year}"
    end

    def card_last4
        card.last4
    end

    def expiration_date
      Time
        .at(subscription.current_period_end)
        .strftime("%B %d, %Y")
    end

    def plans
      Unity::SubscriptionPlan.where(
        gateway_id: "heyfam_unlimited_monthly",
      )
    end

    def price
      subscription.plan.amount / 100
    end

    def selected
      "Billing details"
    end

    def stripe_customer
      @stripe_customer ||= Stripe::Customer.retrieve(
        user.gateway_customer.gateway_id
      )
    end

    def subscription
      @subscription ||= Stripe::Subscription.retrieve(
        user.subscription.gateway_id
      )
    end
  end
end
