module Profile
  class PendingReviewsController < ApplicationController
    skip_before_action  :guard_user_profile_reviewed!

    def show
      @profile = current_user.user_profile
    end
  end
end
