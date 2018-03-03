class SubscriptionCreator
  attr_reader :user, :params

  def initialize(user, params)
    @user = user
    @params = params
  end

  def self.create!(user, params)
    new(user, params).create
  end

  def create
    validate_arguments!(user, params)
    result = create_stripe_subscription
    raise SubscriptionCreateError unless result.is_a?(Stripe::Subscription)
    create_local_subscription(result)
    cancel_subscription(result) if subscription_plan.single?
    result
  end

  private

  def cancel_subscription(result)
    result.delete(at_period_end: true)
  end

  def create_stripe_subscription
    Stripe::Subscription.create(
      customer: user.gateway_customer_id,
      source: params.fetch(:source),
      items: [
        plan: params.fetch(:plan_id),
      ]
    )
  end

  def create_local_subscription(result)
    Subscription.create!(
      user: user,
      subscription_plan: subscription_plan,
      gateway_id: result.id,
      gateway_status: result.status,
    )
  end

  def subscription_plan
    SubscriptionPlan.find_by!(
      gateway_id: params.fetch(:plan_id),
    )
  end

  def validate_arguments!(user, params)
    raise UnauthorizedUserSubscriptionCreateError unless user.role?(:employer)
    raise NullCustomerGatewayIdError < StandardError unless user.gateway_customer_id.present?
    raise NullPlanIdError < StandardError unless params.fetch(:plan_id).present?
    raise NullSourceError < StandardError unless params.fetch(:source).present?
    raise ActiveUnlimitedSubscriptionError < StandardError if user.unlimited?
  end

  class ActiveUnlimitedSubscriptionError < StandardError; end
  class NullCustomerGatewayIdError < StandardError; end
  class NullPlanIdError < StandardError; end
  class NullSourceError < StandardError; end
  class SubscriptionCreateError < StandardError; end
  class UnauthorizedUserSubscriptionCreateError < StandardError; end
end
