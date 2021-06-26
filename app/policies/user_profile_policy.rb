class UserProfilePolicy < ApplicationPolicy
  def create?
    record.draft?
  end

  def update?
    user.id == record.user_id && approved_status?
  end

  private

  def approved_status?
    # If status is changing from draft to pending we want
    # to allow the update.
    # Prevent users from turning off overlay to make changes
    # by checking if profile was already under review.
    !record.status_was == "pending" &&
      (
        record.draft? ||
        record.approved? ||
        record.status_was == "draft"
      )
  end
end
