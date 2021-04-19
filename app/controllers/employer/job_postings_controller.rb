module Employer
  class JobPostingsController < ApplicationController

    def create
      authorize [:employer, Job]
      @job = Job.new(valid_params[:job].merge!(user_id: current_user.id, status: :published))
      if @job.save
        redirect_to employer_preview_job_path(@job)
      else
        render :new
      end 
    end

    def update
      @job = Job.find(params[:id])
      authorize [:employer, @job]
      @job.published!
      flash[:notice] = "Congratulations! your listing is now live. #{redirect_link}"
      redirect_to employer_jobs_path
    end

    private

    def redirect_link
      view_context.link_to("View your listing", job_path(@job))
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
