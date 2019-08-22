module User
  class JobSeekerWithCanceledSubscription
    attr_reader :user

    def initialize(user)
      @user = user
    end

    def self.call(user)
      new(user).call
    end

    def call
      user.role?(:job_seeker) && user.subscription&.canceled?
    end
  end
end
