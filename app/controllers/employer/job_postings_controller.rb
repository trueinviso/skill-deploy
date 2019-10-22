module Employer
  class JobPostingsController < ApplicationController
    def update
      @job = Job.find(params[:id])
      authorize [:employer, @job]
      @job.published!
      flash[:notice] = "<span>Congratulations! your listing is now live.</span> #{redirect_link}"
      redirect_to employer_jobs_path
    end

    private

    def redirect_link
      view_context.link_to("View your listing", job_path(@job))
    end
  end
end
