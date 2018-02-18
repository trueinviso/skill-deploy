module Api
  module V1
    class FiltersController < ApiController
      def index
        roles = JobRole.distinct.pluck(:name)
        types = JobType.distinct.pluck(:name)

        render status: 200, json: { roles: roles, types: types }
      end
    end
  end
end
