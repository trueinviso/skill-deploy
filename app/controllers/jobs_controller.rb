class JobsController < ApplicationController
  def index
    @jobs = jobs
    @roles = JobRole.all
    @types = JobType.all
    @favorites = FavoriteJob.where(user_id: current_user.id).pluck(:job_id)

    respond_to do |format|
      format.html
      format.js
    end
  end

  private

  def jobs
    if params[:search].present?
      Job.filter(params.slice(:search))
    else
      Job.filter(params.slice(:job_type_name, :job_role_name))
    end
  end
end
