module Api
  module V1
    class ApplyController < ApiController
      def create
        authorize applied_for

        if applied_for.present?
          render status: 200, json: applied_for
        else
          applied = AppliedFor.create!(
            user_id: current_user.id,
            job_id: params[:id],
          )
          render status: 200, json: applied
        end
      end

      private

      def applied_for
        @applied_for ||= AppliedFor.where(
          user_id: current_user.id,
          job_id: params[:id],
        ).first
      end
    end
  end
end
