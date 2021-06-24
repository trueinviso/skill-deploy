Unity::Subscription.class_eval do
  def pending_cancellation?
    return false if cancellation_date.blank?
    cancellation_date > Time.now
  end
end
