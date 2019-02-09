module Api
  module V1
    class JobsController < ApiController
      def index
        # authorize Job
        jobs = JobsSerializer.build(
          current_user,
          JobsQuery.new(params),
        )
        render status: 200, json: { jobs: jobs }
      end
    end
  end
end
