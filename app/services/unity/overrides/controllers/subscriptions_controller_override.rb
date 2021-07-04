Unity::SubscriptionsController.class_eval do
  def create
    result = create_subscription

    if result.success?
      current_user.assign_role(:employer)
      send_email(:subscription_receipt, create_subscription_data(result))

      flash[:banner_message] = banner_message
      redirect_to main_app.new_employer_job_path
    else
      redirect_to action: "new"
    end
  end

  def destroy
    result = cancel_subscription

    if result.success?
      send_email(:cancel_subscription, cancel_subscription_data)
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
    "Thank you for your order, a receipt has been sent to your email. You can now create and publish your first listing!"
  end

  def verify_subscription_state
    case action_name.to_sym
    when :create, :new
      if current_user.subscription.present?
        redirect_to action: :edit
      end
    when :edit, :update
      if current_user.subscription.blank?
        redirect_to action: :new
      end
    end
  end

  def send_email(template_id, data)
    SendgridManager.send(
      current_user.email,
      SendgridManager::TEMPLATE_IDS[template_id],
      data,
    )
  end

  def create_subscription_data(result)
    {
      name: current_user.user_profile.first_name,
      subscription_name: result.result.plan.id.gsub("_", " ").capitalize,
      price: "$#{result.result.plan.amount / 100.0}/month",
      renew_date: "30 days",
      purchase_date: Time.at(result.result.start_date).strftime("%B %d, %Y"),
      amount_paid: "$#{result.result.plan.amount / 100.0}",
      login_url:  main_app.new_user_session_path,
    }
  end

  def cancel_subscription_data
    {
      name: current_user.user_profile.first_name,
      cancellation_date: current_user.subscription.cancellation_date,
    }
  end
end
