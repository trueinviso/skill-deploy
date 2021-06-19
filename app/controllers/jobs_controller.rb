class JobsController < ApplicationController
  layout "job_listing", only: :show

  def index
    authorize Job
    @view_component = JobsComponent.new(current_user, jobs)
  end

  def show
    authorize Job
    @view_component = JobsComponent.new(current_user, jobs)
    @job = Job.find_by(id: params[:id])
  end

  private

  def jobs
    JobsSerializer.build(
      current_user,
      JobsQuery.new(params),
    )
  end
end
