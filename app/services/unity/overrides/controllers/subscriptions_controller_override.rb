Unity::SubscriptionsController.class_eval do
  def create
    result = create_subscription

    if result.success?
      current_user.assign_role(:employer)
      current_user.user_profile.approved!

      flash[:banner_message] = banner_message
      redirect_to main_app.new_employer_job_path
    else
      redirect_to action: "new"
    end
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
end
