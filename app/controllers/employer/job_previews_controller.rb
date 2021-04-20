module Employer
  class JobPreviewsController < ApplicationController

    def update
      @job = Job.find(params[:id])
      authorize [:employer, @job]
      @job.preview!
      flash[:notice] = "Your listing is now a draft. #{redirect_link}"
      redirect_to employer_jobs_path
    end

    private

    def redirect_link
      view_context.link_to("View your listing", job_path(@job))
    end
  end
end
