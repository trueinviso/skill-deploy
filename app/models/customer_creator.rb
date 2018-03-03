class CustomerCreator
  attr_reader :user

  def initialize(user)
    @user = user
  end

  def self.create!(user)
    return unless user.role?(:employer)
    new(user).create
  end

  def create
    result = create_stripe_customer
    update_local_user(result)
    result
  end

  private

  def create_stripe_customer
    Stripe::Customer.create(
      email: user.email,
    )
  end

  def update_local_user(result)
    user.update!(gateway_customer_id: result.id)
  end
end
