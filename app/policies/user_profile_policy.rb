class UserProfilePolicy < ApplicationPolicy
  def new?
    !user.user_profile&.persisted?
  end

  def create?
    record.draft? || record.pending?
  end

  def update?
    record.draft? || record.pending?
  end
end
