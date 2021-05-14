module Employer
  module Preview
    class JobsController < ApplicationController
      layout "job_listing"

      def show
        @job = Job.find(params[:id])
        authorize [:employer, @job]
      end
    end
  end
end
