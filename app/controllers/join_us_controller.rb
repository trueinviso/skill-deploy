class JoinUsController < ApplicationController
  skip_before_action :guard_user_registered!

  def show
  end

  def create
    redirect_to main_app.new_user_profile_path
  end
end
