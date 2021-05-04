class TalentMailer < ApplicationMailer
  default from: "team@skilldeploy.com"

  def welcome
    @user = params[:user]

    mail(
      to: @user.email,
      subject: "",
    )
  end
end
