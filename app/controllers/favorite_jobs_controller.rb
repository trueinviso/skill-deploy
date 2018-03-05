class FavoriteJobsController < ApplicationController
  def index
    authorize Job
    @jobs = JobsSerializer.build(
      current_user,
      FavoriteJobsQuery.new(current_user),
    )
  end
end
