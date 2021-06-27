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
      user.employer? && user.active_paid_subscriber?
    end

    def destroy?
      user.employer? &&
        user.active_paid_subscriber? &&
        user_owns_record?
    end

    def edit?
      user.employer? &&
        user.active_paid_subscriber? &&
        user_owns_record?
    end

    def index?
      user.employer?
    end

    def new?
      user.employer? && user.active_paid_subscriber?
    end

    def show?
      user.employer? &&
        user.active_paid_subscriber? &&
        user_owns_record?
    end

    def update?
      user.employer? &&
        user.active_paid_subscriber? &&
        user_owns_record?
    end

    private

    def user_owns_record?
      record.user_id == user.id
    end
  end
end
