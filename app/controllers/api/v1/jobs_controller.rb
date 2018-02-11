module Api
  module V1
    class JobsController < ApiController
      def index
        render json: Job.all
      end
    end
  end
end
