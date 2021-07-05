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

    def send_published_job_notification
      SendgridManager.send(
        current_user.email,
        template_id,
        dynamic_template_data
      )
    end

    def dynamic_template_data
      {
        website_url: main_app.root_url,
        job_listing_url: job_url(job),
      }
    end

    def template_id
      SendgridManager::TEMPLATE_IDS[:published_job_notification]
    end
  end
end
