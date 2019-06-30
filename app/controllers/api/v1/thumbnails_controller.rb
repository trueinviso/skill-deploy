module Api
  module V1
    class ThumbnailsController < ApplicationController
      def update
        ThumbnailUpdater.call!(current_user, update_params)
        render status: 200, json: {
          thumbnail: current_user.reload.thumbnail_url,
        }
      end

      private

      def update_params
        params.permit(
          :model_type,
          :record_id,
          user: [thumbnail_attributes: [:file]],
          job: [thumbnail_attributes: [:file]]
        )
      end
    end
  end
end
