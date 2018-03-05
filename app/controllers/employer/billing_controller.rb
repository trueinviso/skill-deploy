module Employer
  class BillingController < ApplicationController
    def edit
      authorize BillingController
      @view_component = BillingComponent.new(current_user)
    end

    def update
      authorize BillingController
      PaymentMethodUpdater.call!(current_user, params)
      redirect_to edit_employer_billing_path
    end

    def destroy
      authorize BillingController
      SubscriptionCanceller.call!(current_user)
      redirect_to edit_employer_billing_path
    end
  end
end
