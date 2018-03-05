module Employer
  class BillingControllerPolicy < ApplicationPolicy
    def destroy?
      user.role?(:employer)
    end

    def edit?
      user.role?(:employer)
    end

    def update?
      user.role?(:employer)
    end
  end
end
