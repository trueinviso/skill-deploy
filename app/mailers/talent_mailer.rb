class TalentMailer < ApplicationMailer
  default from: "hello@skilldeploy.com"

  def welcome
    @user = params[:user]

    mail(
      to: @user.email,
      subject: "",
    )
  end
end
