module Api
  module V1
    class ThumbnailsController < ApplicationController
      def update
        record = ThumbnailUpdater.call!(current_user, update_params)
        if record
          render status: 200, json: {
            thumbnail: record.thumbnail_url,
          }
        else
          render status: 400, json: {
            errors: "There was a problem updating the thumbnail.",
          }
        end
      end

      private

      def update_params
        params.permit(
          :model_type,
          :record_id,
          user: [thumbnail_attributes: [:file]],
          job: [thumbnail_attributes: [:file]],
        )
      end
    end
  end
end
