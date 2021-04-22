# frozen_string_literal: true

module Talent
  class AppliesController < ApplicationController
    before_action :load_job, only: :create

    def create
      authorize(@job, policy_class: Talent::ApplyPolicy)
      if current_user.applied_jobs.exists?(@job.id)
        flash[:notice] = "Already applied this job." 
      else
        current_user.applied_jobs << @job
        flash[:notice] = "You applied the job listing."
      end
      redirect_to job_path(@job)
    end

    private

    def load_job
      @job = Job.find(params[:job_id])
    end
  end
end
