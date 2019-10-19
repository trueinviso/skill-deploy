class FavoriteJobsController < ApplicationController
  def index
    authorize Job
    @jobs = JobsSerializer.build(
      current_user,
      FavoriteJobsQuery.new(current_user),
    )
    @favorites = FavoriteJob
      .where(user_id: current_user.id)
      .pluck(:job_id)
  end
end
