module Api
  module V1
    class FavoriteJobsController < ApiController
      def create
        if favorite.present?
          render status: 200, json: favorite if favorite.present?
        else
          fav = FavoriteJob.create!(
            user_id: current_user.id,
            job_id: params[:id],
          )
          render status: 200, json: fav
        end
      end

      def destroy
        if favorite.present?
          fav = favorite.destroy
          render status: 200, json: fav
        else
          render status: 400
        end
      end

      private

      def favorite
        @favorite ||= FavoriteJob.where(
          user_id: current_user.id,
          job_id: params[:id],
        ).first
      end
    end
  end
end
