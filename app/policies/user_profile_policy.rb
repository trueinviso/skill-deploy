class UserProfilePolicy < ApplicationPolicy
  def create?
    record.draft?
  end

  def update?
    user.id == record.user_id && allowable_status?
  end

  private

  # If status is changing from draft to pending we want
  # to allow the update.
  # Prevent users from turning off overlay to make changes
  # by checking if profile was already under review.
  def allowable_status?
    return true if record.status_was == "draft" && record.pending?
    return false if record.status_was == "pending"
    return false if record.pending?
    return false if record.blocked?
    true
  end
end
