class ConfirmationsController < ApplicationController

  skip_before_action :guard_user_authenticated!,
    :guard_user_registered!,
    :guard_user_profile_reviewed!

  def index
  end
end
