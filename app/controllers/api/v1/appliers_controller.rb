module Api
  module V1
    class AppliersController < ApiController
      before_action :job, only: :index

      def index
        authorize(job, policy_class: ApplierPolicy)
        appliers = job.appliers.includes(:user_profile, :thumbnail)
        applies_json = AppliersSerializer.new(appliers).serializable_hash.to_json
        render status: :ok, json: applies_json
      end

      private

      def job
        @job ||= Job.find(params[:job_id])
      end
    end
  end
end
