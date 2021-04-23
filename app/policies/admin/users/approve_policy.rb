module Admin
  module Users
    class ApprovePolicy < ApplicationPolicy
      def update?
        user.admin?
      end
    end
  end
end
