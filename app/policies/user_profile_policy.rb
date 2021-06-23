class UserProfilePolicy < ApplicationPolicy
  def create?
    record.draft?
  end

  def update?
    user.id == record.user_id &&
      (
        record.draft? ||
        record.approved? ||
        record.pending?
      )
  end
end
