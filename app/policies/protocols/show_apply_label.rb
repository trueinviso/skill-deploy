module Protocols
  module ShowApplyLabel
    extend self

    def call(user)
      user.user_profile&.draft? ||
        (user.employer_only? && user.user_profile&.draft?)
    end
  end
end
