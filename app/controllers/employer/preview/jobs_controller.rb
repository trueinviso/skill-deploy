module Employer
  module Preview
    class JobsController < ApplicationController
      def show
        @job = Job.find(params[:id])
        authorize [:employer, @job]
      end
    end
  end
end
