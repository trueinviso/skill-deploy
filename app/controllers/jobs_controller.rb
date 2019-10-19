class JobsController < ApplicationController
  def index
    @view_component = JobsComponent.new(current_user, jobs)
  end

  def show
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
