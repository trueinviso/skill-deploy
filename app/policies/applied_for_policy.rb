class AppliedForPolicy < ApplicationPolicy
  def create?
    user.talent? && record.user.active_paid_subscriber?
  end
end
