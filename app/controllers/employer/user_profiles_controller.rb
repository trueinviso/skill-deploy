module Employer
  class UserProfilesController < ApplicationController
    layout "job_listing"

    def show
      @profile = UserProfile.find(params[:id])
    end
  end
end
