module Employer
  class JobsController < ApplicationController
    def index
      @jobs = policy_scope([:employer, Job])
      authorize [:employer, @jobs]
    end

    def new
      authorize [:employer, Job]
      @job = Job.new
    end

    def create
      authorize [:employer, Job]
      job = JobCreator.call!(current_user, valid_params)
      if job && job.save
        redirect_to employer_jobs_path
      else
        render :new
      end
    end

    def edit
      # obv need policy for this
      @job = Job.find(params[:id])
      authorize [:employer, @job]
    end

    def update
      @job = Job.find(params[:id])
      authorize [:employer, @job]
      if @job.update(valid_params[:job])
        redirect_to [:employer, :jobs]
      else
        render :edit
      end
    end

    def destroy
      @job = Job.find(params[:id])
      authorize [:employer, @job]
    end

    private

    def valid_params
      params
        .permit(
          :id,
          :source,
          :plan_id,
          job: [
            :company_name,
            :company_website,
            :contact_email,
            :contact_name,
            :description,
            :experience,
            :job_role_ids,
            :job_type_ids,
            :location,
            :name,
            :remote,
            :world_changing_text,
          ],
        )
    end
  end
end

