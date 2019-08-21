module Profile
  class PendingReviewsController < ApplicationController
    skip_before_action  :guard_user_reviewed!

    def show
      @profile = current_user.user_profile
    end
  end
end
