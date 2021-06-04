class StaticController < ApplicationController
  skip_before_action :guard_user_profile_reviewed!
  skip_before_action :guard_user_registered!
  skip_before_action :guard_user_authenticated!

  def about
  end

  def faq
  end

  def help
  end

  def pricing
  end

  def privacy
  end

  def terms_and_conditions
  end
end