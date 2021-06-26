module Protocols
  module CanViewJobBoard
    extend self

    def allow?(user)
      return true if user.active_employer?
      user.user_profile&.approved?
    end
  end
end
