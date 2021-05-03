module Admin
  class UserProfilePolicy < ApplicationPolicy
    def update?
      user.admin?
    end
  end
end
