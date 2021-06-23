Unity::PaymentMethodController.class_eval do
  def update
    result = update_customer
    if result.success?
      flash[:notice] = "You have successfully updated your credit card."
    else
      message = "Uh oh. Looks like something went wrong. Please try again."
      flash[:error] = message
    end
    redirect_to [:edit, :subscription]
  end
end
