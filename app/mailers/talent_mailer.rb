class TalentMailer < ApplicationMailer
  default from: "team@skilldeploy.com"

  def welcome(user)
    @user = user

    mail(
      to: @user.email,
      subject: "",
    )
  end
end
