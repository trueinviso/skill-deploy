module Employer
  class AppliedForsController < ApplicationController
    before_action :applied_for, only: :show

    def show
      authorize @applied_for
    end

    private

    def applied_for
      @applied_for = AppliedFor.find(params[:id])
    end
  end
end
