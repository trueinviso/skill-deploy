module Employer
  class PaymentMethodUpdaterPolicy < ApplicationPolicy
    def update?
      user.role?(:employer)
    end
  end
end
