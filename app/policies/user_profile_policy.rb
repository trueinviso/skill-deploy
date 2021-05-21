class UserProfilePolicy < ApplicationPolicy
  def update?
    record.draft? || record.pending?
  end
end
