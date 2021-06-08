module Api
  module V1
    class ApplicantsController < ApiController
      before_action :job, only: :index

      def index
        authorize(job, policy_class: ApplicantPolicy)
        render status: :ok, json: serialize_applicants
      end

      private

      def serialize_applicants
        ApplicantsSerializer
          .new(applicants)
          .serializable_hash
          .to_json
      end

      def applicants
        job
          .applicants
          .includes(:user_profile, :thumbnail, :applied_for)
          .order("applied_fors.created_at ASC")
      end

      def job
        @job ||= Job.find(params[:job_id])
      end
    end
  end
end
