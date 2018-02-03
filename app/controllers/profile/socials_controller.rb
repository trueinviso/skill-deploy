module Profile
  class SocialsController < ApplicationController
    def update
      user_profile = current_user.user_profile
      if user_profile.update(user_profile_params)
        redirect_to edit_profile_social_path
      else
        render "edit"
      end
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
end
