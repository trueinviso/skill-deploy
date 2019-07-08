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
      active_paid_employer?
    end

    def destroy?
      active_paid_employer? && record.last.user_id == user.id
    end

    def edit?
      active_paid_employer? && record.last.user_id == user.id
    end

    def index?
      active_paid_employer?
    end

    def new?
      active_paid_employer?
    end

    def update?
      active_paid_employer? && record.last.user_id == user.id
    end

    private
    
    def active_paid_employer?
      user.role?(:employer) && user.active_paid_subscriber?
    end
  end
end
