class JobsSerializer
  attr_reader :user, :jobs_query

  def initialize(user, jobs_query)
    @user = user
    @jobs_query = jobs_query
  end

  def self.build(user, jobs_query)
    new(user, jobs_query).build
  end

  def build
    jobs.map do |job|
      {
        id: job.id,
        name: job.name,
        company_name: job.company_name,
        location: job.location,
        liked: favorite_ids.include?(job.id),
        thumbnail_url: job.thumbnail_url,
        job_types: job.job_types.map { |type| { name: type.name } },
      }
    end
  end

  private

  def favorite_ids
    @favorite_ids ||= FavoriteJob
      .where(job_id: jobs.map(&:id), user: user)
      .pluck(:job_id)
      .to_set
  end

  def jobs
    jobs_query.jobs
  end
end
