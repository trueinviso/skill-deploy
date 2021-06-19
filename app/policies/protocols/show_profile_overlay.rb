module Protocols
  module ShowProfileOverlay
    extend self

    def call(user)
      user.user_profile&.pending? ||
        user.user_profile&.blocked?
    end
  end
end
