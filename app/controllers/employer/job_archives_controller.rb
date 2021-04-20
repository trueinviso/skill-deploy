module Employer
  class JobArchivesController < ApplicationController

    def update
      @job = Job.find(params[:id])
      authorize [:employer, @job]
      @job.archived!
      flash[:notice] = "Job listing is now archived. #{redirect_link}"
      redirect_to employer_jobs_path
    end

    private

    def redirect_link
      view_context.link_to("View your listing", job_path(@job))
    end
  end
end
