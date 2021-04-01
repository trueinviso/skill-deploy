class TalentMailer < ApplicationMailer
  default from: "hello@skilldeploy.com"

  def welcome(user)
    @user = user

    mail(
      to: user.user_profile.email,
      subject: "",
    )
  end
end