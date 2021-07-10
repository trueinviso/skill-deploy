class StaticController < ApplicationController
  skip_before_action :guard_user_profile_reviewed!
  skip_before_action :guard_user_authenticated!

  def about
  end

  def cancellation_policy
  end

  def faq
  end

  def help
  end

  def pricing
  end

  def privacy
  end

  def refund_policy
  end

  def terms_and_conditions
  end
end
