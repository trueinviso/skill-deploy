module Employer
  class JobsController < ApplicationController
    # before_action :guard_user_subscribed!

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
      job = Job.new(valid_params[:job].merge!(user_id: current_user.id))
      if job.save
        redirect_to employer_jobs_path
      else
        render :new
      end
    end

    def edit
      @job = Job.find(params[:id])
      authorize [:employer, @job]
    end

    def update
      job = Job.find(params[:id])
      authorize [:employer, job]
      if job.update(valid_params[:job])
        redirect_to [:employer, :jobs]
      else
        render :edit
      end
    end

    def destroy
      job = Job.find(params[:id])
      authorize [:employer, job]
      job.destroy
      redirect_to employer_jobs_path
    end

    private

    def guard_user_subscribed!
      if current_user.subscription.blank?
        redirect_to unity.new_subscription_path
      end
    end

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
  end
end

