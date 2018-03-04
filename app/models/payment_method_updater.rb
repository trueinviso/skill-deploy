class PaymentMethodUpdater
  attr_reader :user
  attr_reader :params

  def initialize(user, params)
    @user = user
    @params = params
  end

  def self.call!(user, params)
    new(user, params).call
  end

  def call
    update
  end

  private

  def find_customer
    Stripe::Customer.retrieve(user.gateway_customer_id)
  end

  def update
    raise UserNotPaidSubscriberError unless user.paying_subscriber?
    raise NullSourceParamError unless params[:source].present?
    customer = find_customer
    customer.source = params[:source]
    customer.save
  end

  class UserNotPaidSubscriberError < StandardError; end
  class NullSourceParamError < StandardError; end
end
