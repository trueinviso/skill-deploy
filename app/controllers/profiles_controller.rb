class ProfilesController < ApplicationController
  skip_before_action :guard_user_registered!, only: [:new, :create]

  def new
  end

  def create
    result = current_user.update(permitted_params.merge(review_status: :pending))
    if result
      current_user.assign_role("Job Seeker")
      redirect_to root_path
    else
      render :new
    end
  end

  def update
    user_profile = current_user.user_profile
    user_profile.update!(user_profile_params)
    respond_to do |format|
      format.js
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
        social_media_profile_attributes: [
          :facebook,
          :instagram,
          :twitter,
          :website,
        ],
        user_profile_attributes: [
          :bio,
          :first_name,
          :headline,
          :last_name,
          :location,
        ],
        work_experiences_attributes: [
          :company,
          :current_role,
          :end,
          :start,
          :title,
        ],
      )
  end
end
