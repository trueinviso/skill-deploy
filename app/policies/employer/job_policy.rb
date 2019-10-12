module Employer
  class JobPolicy < ApplicationPolicy
    class Scope
      attr_reader :user, :scope

      def initialize(user, scope)
        @user = user
        @scope = scope
      end

      def resolve
        user.jobs.includes(:job_types)
      end
    end

    def create?
      user.role?(:employer)
    end

    def destroy?
      user.role?(:employer) && record.user_id == user.id
    end

    def edit?
      user.role?(:employer) && record.user_id == user.id
    end

    def index?
      user.role?(:employer)
    end

    def new?
      user.role?(:employer)
    end

    def update?
      user.role?(:employer) && record.user_id == user.id
    end
  end
end
