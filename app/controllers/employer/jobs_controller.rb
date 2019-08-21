module Employer
  class JobsController < ApplicationController
    before_action :guard_user_subscribed!

    def index
      @jobs = policy_scope([:employer, Job])
      @view_component = Employer::JobsComponent
      # TODO: Add employer role to user when they sign up
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

    def guard_user_subscribed!
      subscription = User::Subscription.new(current_user)
      if current_user.past_due_subscriber?
        redirect_to edit_employer_billing_path
      elsif current_user.role?(:job_seeker) || subscription.blank_or_canceled?
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
            thumbnail_attributes: [:file],
          ],
        )
    end
  end
end

