class FavoriteJobsController < ApplicationController
  def index
    @favorite_jobs = FavoriteJob
      .includes(:job)
      .where(user_id: current_user.id)
  end

  def create
    FavoriteJob.where(
      user_id: current_user.id,
      job_id: params[:job_id],
    ).first_or_create!
    redirect_to jobs_path
  end
end
