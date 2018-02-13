module Api
  module V1
    class FavoriteJobsController < ApiController
      def create
        byebug
        render status: 200, json: favorite if favorite.present?
        favorite = FavoriteJob.create!(
          user_id: current_user.id,
          job_id: params[:job_id],
        )
        render status: 200,
          json: favorite
      end

      def destroy
        byebug
        return unless favorite.present?
        favorite.destroy
        render status: 200,
          json: { success: "Successful destroy" }

      end

      private

      def favorite
        @favorite ||= FavoriteJob.where(
          user_id: current_user.id,
          job_id: params[:job_id],
        )
      end
    end
  end
end
