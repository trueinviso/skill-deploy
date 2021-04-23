module Admin
  module Users
    class BlockPolicy < ApplicationPolicy
      def update?
        user.admin?
      end
    end
  end
end
