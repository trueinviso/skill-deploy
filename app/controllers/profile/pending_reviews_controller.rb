module Profile
  class PendingReviewsController < ApplicationController
    skip_before_action :guard_user_authenticated!,
      :guard_user_registered!, unless: :devise_controller?

    def index; end
  end
end
