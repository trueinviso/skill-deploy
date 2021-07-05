module Employer
  class JobPostingsController < ApplicationController
    def update
      authorize [:employer, job]
      job.published!
      send_published_job_notification
      flash[:banner_message] = "Congratulations! your listing is now live. #{redirect_link}"
      redirect_to employer_jobs_path
    end

    private

    def job
      @job ||= Job.find(params[:id])
    end

    def redirect_link
      view_context.link_to("View your listing", job_path(@job))
    end

    def send_message_notification
      SendgridManagerWorker
        .perform_async(email_data)
    end

    def email_data
      SendgridTemplateData
        .call(:published_job_notification, job)
  end
end
