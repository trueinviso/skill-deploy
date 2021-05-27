module ShowApplyLabel
  extend self

  def call(user)
    user.pending_talent? ||
      employer_without_profile?(user)
  end

  private

  def employer_without_profile?(user)
    user.employer_only? &&
      user.user_profile.blank?
  end
end
