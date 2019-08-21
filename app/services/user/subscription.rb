module User
  class Subscription
    attr_reader :user

    def initialize(user)
      @user = user
    end

    def blank_or_canceled?
      current_user.role?(:job_seeker) ||
        user.subscription.blank? || user.subscription.canceled?
    end
  end
end
