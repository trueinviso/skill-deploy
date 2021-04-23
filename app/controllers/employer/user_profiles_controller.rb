module Employer
  class UserProfilesController < ApplicationController
    def show
      @profile = UserProfile.find(params[:id])
    end
  end
end
