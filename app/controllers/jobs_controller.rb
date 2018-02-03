class JobsController < ApplicationController
  def index
    @jobs = Job.filter(params.slice(:job_type_name, :job_role_name, :tag_name))
    @roles = JobRole.all
    @types = JobType.all
  end
end
