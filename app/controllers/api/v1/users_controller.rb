module Api
  module V1
    class UsersController < ApiController
      def show
        render status: 200, json: current_user.build_json
      end
    end
  end
end
