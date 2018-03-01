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
    if result.success?
      build_job
    else
      false
    end
  end

  def build_job
    Job.new(params[:job].merge!(user_id: user.id))
  end

  def create_subscription
    # create stripe subscription here
    Unity::BraintreeGateway::Actions.create_customer_subscription(
      user,
      subscription_params,
    )
  end

  def subscription_params
    plan_id = params.delete(:plan_id)
    payment_method_nonce = params.delete(:payment_method_nonce)
    { plan_id: plan_id, payment_method_nonce: payment_method_nonce }
  end
end
