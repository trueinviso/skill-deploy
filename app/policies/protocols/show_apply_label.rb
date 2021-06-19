module Protocols
  module ShowApplyLabel
    extend self

    def allow?(user)
      user.user_profile&.draft? ||
        (user.employer_only? && !user.user_profile&.approved?)
    end
  end
end
