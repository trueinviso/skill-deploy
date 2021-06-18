module Protocols
  module ShowApplyLabel
    extend self

    def call(user)
      user.pending_talent? ||
        user.employer_only?
    end
  end
end
