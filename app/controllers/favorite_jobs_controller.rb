class FavoriteJobsController < ApplicationController
  def index
    authorize Job
    @view_component = JobsComponent.new(current_user, jobs)
  end

  private

  def jobs
    JobsSerializer.build(
      current_user,
      FavoriteJobsQuery.new(current_user),
    )
  end
end
