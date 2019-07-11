class JobsComponent
  attr_reader :user, :jobs

  def initialize(user, jobs)
    @user = user
    @jobs = jobs
  end

  def favorites
    @favorites = FavoriteJob.where(user_id: user.id).pluck(:job_id)
  end

  def job_roles
    @job_roles ||= JobRole.all
  end

  def job_types
    @job_types ||= JobType.all
  end
end
