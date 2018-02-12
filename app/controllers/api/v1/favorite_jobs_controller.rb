module Api
  module V1
    class FavoriteJobsController < ApiController
      def index
        favorites = FavoriteJob
          .where(user_id: current_user.id)

        render json: favorites.to_json(only: :id)
      end

      def create
        favorite = FavoriteJob.where(
          user_id: current_user.id,
          job_id: params[:job_id],
        ).first

        if favorite.present?
          favorite.destroy
          render json: { success: "Destroyed favorite" }
        else
          FavoriteJob.create!(
            user_id: current_user.id,
            job_id: params[:job_id],
          )
          render json: { success: "Created favorite" }
        end
      end
    end
  end
end
