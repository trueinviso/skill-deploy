class JoinUsController < ApplicationController
  skip_before_action :guard_user_registered!

  def show
  end
end
