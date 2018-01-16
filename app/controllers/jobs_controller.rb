class JobsController < ApplicationController
  def index
    @jobs = Job.filter(params.slice(:job_type_name, :job_role_name, :tag_name))
    @current_role = JobRole.find_by(name: params[:job_role_name])
  end
end
