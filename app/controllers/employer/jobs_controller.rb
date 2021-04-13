module Employer
  class JobsController < ApplicationController
    before_action :load_and_authorize_job, only: %i[edit update destroy]
	layout "job_listing"
    def index
      @jobs = policy_scope([:employer, Job])
      @view_component = Employer::JobsComponent
      authorize [:employer, @jobs]
    end

    def new
      authorize [:employer, Job]
      @job = Job.new
    end

    def create
      authorize [:employer, Job]
      @job = Job.new(valid_params[:job].merge!(user_id: current_user.id))
      if @job.save
        redirect_to employer_preview_job_path(@job)
      else
        render :new
      end
    end

    def edit; end

    def update
      if @job.update(valid_params[:job])
        redirect_to [:employer, :jobs]
      else
        render :edit
      end
    end

    def destroy
      @job.destroy

      redirect_to employer_jobs_path
    end

    private

    def valid_params
      params
        .permit(
          :id,
          job: [
            :company_name,
            :company_website,
            :contact_email,
            :contact_name,
            :description,
            :job_role_ids,
            :job_type_ids,
            :job_experience_ids,
            :location,
            :name,
            :remote,
            :twitter,
            :facebook,
            :instagram,
            thumbnail_attributes: [:file],
          ],
        )
    end

    private

    def load_and_authorize_job
      @job = Job.find(params[:id])
      authorize [:employer, @job]
    end
  end
end
