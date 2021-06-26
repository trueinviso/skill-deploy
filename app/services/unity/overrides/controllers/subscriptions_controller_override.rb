Unity::SubscriptionsController.class_eval do
  def create
    result = create_subscription

    if result.success?
      current_user.assign_role(:employer)

      flash[:banner_message] = banner_message
      redirect_to main_app.new_employer_job_path
    else
      redirect_to action: "new"
    end
  end

  def destroy
    result = cancel_subscription

    if result.success?
      flash[:banner_message] = "Subscription cancelled successfully."
    else
      flash[:banner_message] = "Subscription failed to cancel."
    end

    redirect_to unity.edit_subscription_path

  end

  private

  def flash_message
    "Thank you for your payment! Your subscription is now active. " \
    "#{view_context.link_to('View your account', main_app.edit_user_profile_path)}"
      .html_safe
  end

  def banner_message
    "Thank you for your oder, a receipt has been sent to your email. You can now create and publish your first listing!"
  end

  def verify_subscription_state
    case action_name.to_sym
    when :create, :new
      if current_user.subscription.present?
        redirect_to action: :edit
      end
    when :edit, :update
      if current_user.subscription.blank?
        redirect_to main_app.new_profile_subscription_path
      end
    end
  end
end
