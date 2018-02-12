module Api
  module V1
    class JobsController < ApiController
      def index
        jobs = Job.filter(params.slice(:job_type_name, :job_role_name))
        render json: jobs
      end
    end
  end
end
