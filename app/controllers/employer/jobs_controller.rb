module Employer
  class JobsController < ApplicationController
    def index
      @jobs = current_user.jobs.all
    end

    def new
      @job = Job.new
    end

    def create
      @job = Job.new(create_params.merge!(user_id: current_user.id))
      if @job.save
        redirect_to employer_jobs_path
      else
        render "new"
      end
    end

    def show
    end

    def edit
      # obv need policy for this
      @job = Job.find(params[:id])
    end

    def destroy
    end

    private

    def create_params
      params.require(:job)
        .permit(
          :name,
          :company_name,
          :location,
          :remote,
      )
    end
  end
end

