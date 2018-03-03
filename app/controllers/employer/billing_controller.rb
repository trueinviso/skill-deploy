module Employer
  class BillingController < ApplicationController
    def edit
      # Stripe plans here
      @plans = Unity::SubscriptionPlan.where(id: 1)
    end

    def update
    end
  end
end
