class JobsQuery
  attr_reader :user, :params

  def initialize(params)
    @params = params
  end

  def jobs
    jobs ||= Job
      .includes(:job_types)
      .filter_result(params.slice(:job_type_name, :job_role_name, :search))
      .sort { |x, y| y.created_at <=> x.created_at }
  end
end
