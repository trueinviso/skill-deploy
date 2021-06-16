module Protocols
  module ShowApplyLabel
    extend self

    def call(user)
      user.pending_talent? ||
        user.employer_only?
    end

    private

    def employer_without_profile?(user)
      user.employer_only? &&
        user.user_profile.blank?
    end
  end
end
