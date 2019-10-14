class JobsController < ApplicationController
  def index
    @jobs = jobs.sort { |x, y| y.created_at <=> x.created_at }
    @view_component = JobsComponent.new(current_user, jobs)
  end

  def show
    @job = Job.find_by(id: params[:id])
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
