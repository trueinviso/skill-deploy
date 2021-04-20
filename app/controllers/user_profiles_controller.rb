class UserProfilesController < ApplicationController
  skip_before_action :guard_user_registered!, only: [:new, :create]

  def new
  end

  def create
    result = current_user.update(permitted_params)
    if result
      current_user.assign_role("Job Seeker")
      current_user.user_profile.pending!
      redirect_to root_path
    else
      render :new
    end
  end

  def update
    result = current_user.update(permitted_params)
    if result
      redirect_to edit_user_profile_path
    else
      render :edit
    end
  end

  def edit
    @user_profile = current_user.user_profile
  end

  def show
    @user_profile = current_user.user_profile
  end

  private

  def permitted_params
    params
      .require(:user)
      .permit(
        :job_role_ids,
        :job_experience_ids,
        :job_type_ids,
        :skills,
        :rate_range_id,
        social_media_profile_attributes: [
          :facebook,
          :id,
          :instagram,
          :twitter,
          :website,
        ],
        user_profile_attributes: [
          :bio,
          :first_name,
          :headline,
          :id,
          :last_name,
          :location,
        ],
        work_experiences_attributes: [
          :_destroy,
          :company,
          :current_role,
          :end,
          :id,
          :start,
          :title,
        ],
      )
  end
end
