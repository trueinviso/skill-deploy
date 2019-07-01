module Api
  module V1
    class ThumbnailsController < ApplicationController
      def update
        ThumbnailUpdater.call!(current_user, update_params)
        render status: 200, json: {
          thumbnail: thumbnail_for(params[:model_type], params[:record_id]),
        }
      end

      

      private

      def thumbnail_for(type, id)
        type.camelize.constantize.find(id).thumbnail_url
      end

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
