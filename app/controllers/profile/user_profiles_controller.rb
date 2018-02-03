class UserProfilesController < ApplicationController
  def update
    user_profile = current_user.user_profile
    user_profile.update!(user_profile_params)
  end

  def edit
    @user_profile = current_user.user_profile
  end

  private

  def user_profile_params
    params.require(:user_profile)
      .permit(
        :location,
        :website,
        :bio,
        :twitter,
        :facebook,
        :linked_in,
        :dribbble,
        :github,
        :codepen,
        :medium,
        :behance,
        :instagram,
        :vimeo,
      )
  end
end
