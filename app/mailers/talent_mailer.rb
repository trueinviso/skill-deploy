# frozen_string_literal: true

class TalentMailer < ApplicationMailer
  default from: "admin@skilldeploy.com"
  default body: "not used"

  def welcome(user)
    @user = user

    mail(
      to: @user.email,
      subject: "",
    )
  end
end
