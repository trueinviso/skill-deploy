module Api
  module V1
    class JobsController < ApiController
      def index
        jobs = Job
          .includes(:job_types)
          .filter(params.slice(:job_type_name, :job_role_name))

        render json: jobs.to_json(include: { job_types: { only: :name } })
      end
    end
  end
end
