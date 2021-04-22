module Talent
  class ApplyPolicy < ApplicationPolicy
    def create?
      user.talent?
    end
  end
end
