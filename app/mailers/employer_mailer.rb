class EmployerMailer < ApplicationMailer
  default from: "team@skilldeploy.com"

  def job_listing_publish_notification
    @job = params[:job]
    @user = @job.user
    
    mail(
      to: @user.email,
      subject: "You job is live now",
    )
  end

  def job_listing_talent_apply_notification
    @user = params[:user]
    @talent = params[:talent]

    mail(
      to: @user.email,
      subject: "Talent applied your job listing",
    )
  end
end
