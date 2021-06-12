module Employer
  class AppliedForsController < ApplicationController
    before_action :applied_for, only: :show
    before_action :profile, only: :show

    def show
      authorize @applied_for
    end

    private

    def applied_for
      @applied_for ||= AppliedFor.find(params[:id])
    end

    def profile
      @profile ||= applied_for.user.user_profile
    end
  end
end
