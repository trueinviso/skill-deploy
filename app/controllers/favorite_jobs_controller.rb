class FavoriteJobsController < ApplicationController
  before_action :set_favorites
  before_action :set_file_name, only: [:create]

  def index
    @jobs = Job.where(
      id: @favorites,
    )
  end

  def create
    @job = Job.find_by(id: params[:job_id])

    respond_to do |format|
      format.js
    end
  end

  private

  def set_favorites
    @favorites = FavoriteJob
      .includes(:job)
      .where(user_id: current_user.id)
      .pluck(:job_id)
  end

  def set_file_name
    if favorite.present?
      @favorite.first.destroy
      @file_name = "save-inactive.svg"
    else
      @file_name = "save-active.svg"
      FavoriteJob.create!(
        user_id: current_user.id,
        job_id: params[:job_id],
      )
    end
  end

  def favorite
    @favorite ||= FavoriteJob.where(
      user_id: current_user.id,
      job_id: params[:job_id],
    )
  end
end
