module Protocols
  module ShowApplyLabel
    extend self

    def allow?(user)
      user.pending_talent? ||
        (user.employer_only? && !user.user_profile&.approved?)
    end
  end
end
