class FavoriteJobsQuery
  attr_reader :user

  def initialize(user)
    @user = user
  end

  def jobs
    @jobs ||= Job
      .includes(:job_types)
      .where(id: favorites)
  end

  private

  def favorites
    @favorites = FavoriteJob
      .includes(:job)
      .where(user_id: user.id)
      .pluck(:job_id)
  end
end
