class UserProfilePolicy < ApplicationPolicy
  def create?
    record.draft? || record.pending?
  end

  def update?
    record.draft? || record.approved?
  end
end
