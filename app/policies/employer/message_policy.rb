module Employer
  class MessagePolicy < ApplicationPolicy
    def create?
      user.employer? && user.active_paid_subscriber?
    end
  end
end
