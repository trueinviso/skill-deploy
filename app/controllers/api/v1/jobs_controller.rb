module Api
  module V1
    class JobsController < ApiController
      def index
        jobs = JobsSerializer.build(
          current_user,
          JobsQuery.new(params),
        )
        render status: 200, json: jobs
      end
    end
  end
end
