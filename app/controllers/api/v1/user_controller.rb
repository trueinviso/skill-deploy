module Api
  module V1
    class UserController < ApiController
      def index
        render status: 200, json: User.last
      end
    end
  end
end
