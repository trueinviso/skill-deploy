class AppliedForsController < ApplicationController
  def index
    authorize Job
    @jobs = JobsSerializer.build(
      current_user,
      AppliedJobsQuery.new(current_user),
    )
  end
end
