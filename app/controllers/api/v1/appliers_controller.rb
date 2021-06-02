module Api
  module V1
    class AppliersController < ApiController
      before_action :job, only: :index

      def index
        applies = AppliersSerializer.build(
          current_user,
          job.appliers,
        )
        render status: :ok, json: { applies: applies }
      end

      private

      def job
        @job ||= Job.find(params[:job_id])
      end
    end
  end
end
