module Api
  module V1
    class JobFiltersController < ApiController
      def index
        roles = JobRole.select(:id, :name).distinct.order(:id)
        types = JobType.select(:id, :name).distinct.order(:id)

        render status: 200, json: { roles: roles, types: types }
      end
    end
  end
end
