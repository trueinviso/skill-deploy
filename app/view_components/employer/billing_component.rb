module Employer
  class BillingComponent
    attr_reader :user

    def initialize(user)
      @user = user
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
      "#{card.exp_month.to_s.rjust(2, '0')}/#{card.exp_year}"
    end

    def card_last4
      card.last4
    end

    def current_plan_name
      gateway_subscription
        .plan_name
    end

    def current_plan_price
      gateway_subscription
        .price
    end

    def cancelled_at
      gateway_subscription
        .cancelled_at
    end

    def expiration_date
      gateway_subscription
        .expiration_date
    end

    def gateway_subscription
      user.gateway_subscription
    end

    def plans
      Unity::SubscriptionPlan.where(
        gateway_id: "heyfam_unlimited_monthly",
      )
    end

    def selected
      "Billing details"
    end

    def awaiting_cancellation?
      user.subscription.present? &&
        user.awaiting_cancellation?
    end

    def active_subscription?
      user.paying_subscriber?
    end

    def stripe_customer
      @stripe_customer ||= Stripe::Customer.retrieve(
        user.gateway_customer.gateway_id,
      )
    end
  end
end
