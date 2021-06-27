class AppliedForPolicy < ApplicationPolicy
  def create?
    return user.talent? if !record.present?
    user.talent? && record.user_id == user.id
  end
end
