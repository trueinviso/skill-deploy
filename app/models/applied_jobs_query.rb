class AppliedJobsQuery
  attr_reader :user

  def initialize(user)
    @user = user
  end

  def jobs
    jobs ||= Job
      .includes(:job_types)
      .where(id: applied_jobs)
  end

  private

  def applied_jobs
    @favorites = AppliedFor
      .includes(:job)
      .where(user_id: user.id)
      .pluck(:job_id)
  end
end
