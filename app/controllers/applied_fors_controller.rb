class AppliedForsController < ApplicationController
  def index
    @jobs = JobsSerializer.build(
      current_user,
      AppliedJobsQuery.new(current_user),
    )
  end
end
