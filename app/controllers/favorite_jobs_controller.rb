class FavoriteJobsController < ApplicationController
  def index
    @favorites = JobsSerializer.build(
      current_user,
      FavoriteJobsQuery.new(current_user),
    )
  end
end
