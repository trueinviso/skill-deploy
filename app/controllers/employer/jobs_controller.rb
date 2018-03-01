module Employer
  class JobsController < ApplicationController
    def index
      @jobs = current_user.jobs.all
    end

    def new
      @job = Job.new
      # generate stripe token here
      # @token = Unity::BraintreeGateway::Actions.generate_client_token
    end

    def create
      job = JobCreator.call!(current_user, valid_params)
      if job && job.save
        redirect_to employer_jobs_path
      else
        render :new
      end
    end

    def show
    end

    def edit
      # obv need policy for this
      @job = Job.find(params[:id])
    end

    def update
      @job = Job.find(params[:id])
      if @job.update(valid_params[:job])
        redirect_to [:employer, :jobs]
      else
        render :edit
      end
    end

    def destroy
    end

    private

    def valid_params
      params
        .permit(
          :id,
          :payment_method_nonce,
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

