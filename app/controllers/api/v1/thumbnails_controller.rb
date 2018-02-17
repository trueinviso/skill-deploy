module Api
  module V1
    class ThumbnailsController < ApplicationController
      def update
        current_user.update!(update_params)
        render status: 200, json: {
          thumbnail: current_user.reload.thumbnail_url,
        }
      end

      def destroy
        current_user.thumbnail.destroy if current_user.thumbnail.present?
        render status: 200, json: {
          thumbnail: current_user.reload.thumbnail_url,
        }
      end

      private

      def update_params
        params.require(:user).permit(thumbnail_attributes: [:file])
      end
    end
  end
end
