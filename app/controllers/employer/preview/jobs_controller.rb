module Employer
  module Preview
    class JobsController < ApplicationController
      def show
        # TODO:authorize preview for user only
        @job = Job.find(params[:id])
      end
    end
  end
end
