module Api
  module V1
    class JobFiltersController < ApiController
      def index
        roles = JobRole.all
        types = JobType.all

        render status: 200, json: { roles: roles, types:  types }
      end
    end
  end
end
