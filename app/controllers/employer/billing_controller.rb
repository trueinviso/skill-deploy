module Employer
  class BillingController < ApplicationController
    def edit
      @plans = SubscriptionPlan.where(id: 1)
    end

    def update
    end
  end
end
