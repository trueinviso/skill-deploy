class ApproveApplicationWorker
  include Sidekiq::Worker

  def perform(user_id)
    user = User.find(user_id)
    approve_profile(user)
    send_email_notification(user)
  end

  private

  def approve_profile(user)
    talent_role = Role.find_by(name: Role::TALENT)

    if !user.roles.include?(talent_role)
      user.roles << talent_role
    end

    user.user_profile.approved!
  end

  def send_email_notification(user)
    SendgridManagerWorker
      .perform_async(email_data(user))
  end

  def email_data(user)
    SendgridTemplateData
      .call(:welcome, user)
  end
end
