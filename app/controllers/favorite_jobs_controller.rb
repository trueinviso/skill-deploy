class FavoriteJobsController < ApplicationController
  def index
    @jobs = JobsSerializer.build(
      current_user,
      FavoriteJobsQuery.new(current_user),
    )
  end
end
