module Employer
  class AppliedForPolicy < ApplicationPolicy
    def show?
      user.role?(:employer) && user.active_paid_subscriber?
    end
  end
end
