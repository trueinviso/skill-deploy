Unity::SubscriptionsController.class_eval do
  def create
    result = create_subscription

    if result.success?
      current_user.assign_role(:employer)
      redirect_to main_app.employer_root_path
    else
      redirect_to action: "new"
    end
  end
end
