class UserMailer < ApplicationMailer
  default from: "team@skilldeploy.com"

  def password_change_notification(user)
    @user = user
  
    mail(
      to: user.user_profile.email,
      subject: "Talent applied your job listing",
    )
  end
end
