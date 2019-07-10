class HomeController < ActionController::Base
  layout 'application'
  def pending_review
    render :pending_review
  end
end
