module Employer
  class JobPolicy < ApplicationPolicy
    class Scope
      attr_reader :user, :scope

      def initialize(user, scope)
        @user = user
        @scope = scope
      end

      def resolve
        user.jobs
      end
    end

    def create?
      user.role?(:employer) && user.active_paid_subscriber?
    end

    def destroy?
      user.role?(:employer) &&
        user.active_paid_subscriber? &&
        user_owns_record?
    end

    def edit?
      user.role?(:employer) &&
        user.active_paid_subscriber? &&
        user_owns_record?
    end

    def index?
      user.role?(:employer)
    end

    def new?
      user.role?(:employer) && user.active_paid_subscriber?
    end

    def show?
      user.role?(:employer) &&
        user.active_paid_subscriber? &&
        user_owns_record?
    end

    def update?
      user.role?(:employer) &&
        user.active_paid_subscriber? &&
        user_owns_record?
    end

    private

    def user_owns_record?
      record.user_id == user.id
    end
  end
end
