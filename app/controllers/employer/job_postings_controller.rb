module Employer
  class JobPostingsController < ApplicationController
    
    def update
      @job = Job.find(params[:id])
      authorize [:employer, @job]
      @job.published!
      send_job_listing_publish_notification
      flash[:notice] = "Congratulations! your listing is now live. #{redirect_link}"
      SendgridManager.send(current_user.email, ENV['SENDGRID_EMAIL_JOB_LISTING_PUBLISHED_TEMPLATE'], {
        website_url: main_app.root_url,
        job_listing_url: job_url(@job)
      })
      redirect_to employer_jobs_path
    end

    private

    def redirect_link
      view_context.link_to("View your listing", job_path(@job))
    end

    def send_job_listing_publish_notification
      EmployerMailer.job_listing_publish_notification(@job).deliver_later
    end
  end
end
