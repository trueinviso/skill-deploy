module Employer
  class JobPostingsController < ApplicationController
    def update
      @job = Job.find(params[:id])
      authorize [:employer, @job]
      @job.published!
      flash[:notice] = "Congratulations! your listing is now live. View your listing"
      redirect_to employer_jobs_path
    end
  end
end
