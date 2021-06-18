class JobsController < ApplicationController
  layout "job_listing", only: :show

  def index
    @view_component = JobsComponent.new(current_user, jobs)
  end

  def show
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
