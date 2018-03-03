class JobCreator
  attr_reader :user, :params

  def initialize(user, params)
    @user = user
    @params = params
  end

  def self.call!(user, params)
    new(user, params).send(:execute)
  end

  private

  def execute
    result = create_subscription
    build_job
  end

  def build_job
    Job.new(params[:job].merge!(user_id: user.id))
  end

  def create_subscription
    SubscriptionCreator.create!(
      user,
      subscription_params,
    )
  end

  def subscription_params
    plan_id = params.delete(:plan_id)
    source = params.delete(:source)
    { plan_id: plan_id, source: source }
  end
end
