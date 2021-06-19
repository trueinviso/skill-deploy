class UserProfilesController < ApplicationController
  skip_before_action :guard_user_registered!, only: [:new, :create]

  def new
    authorize UserProfile
    flash[:banner_message] = t(".draft")
  end

  def create
    current_user.assign_attributes(skills_to_array(permitted_params))
    authorize current_user.user_profile
    if current_user.save
      current_user.assign_role("Job Seeker")
      flash[:notice] = t(".success", status: current_user.user_profile.status)
      redirect_to root_path
    else
      flash[:notice] = t(".failure")
      render :new
    end
  end

  def update
    current_user.assign_attributes(skills_to_array(permitted_params))
    authorize current_user.user_profile
    if current_user.save
      redirect_to edit_user_profile_path
    else
      flash[:notice] = t(".failure")
      render :edit
    end
  end

  def edit
    @user_profile = current_user.user_profile
    flash[:banner_message] = t(".#{@user_profile.status}")
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
        :job_location_ids,
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
          :status,
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

  def skills_to_array(params)
    params[:skills] = params[:skills]&.split(",")
    params
  end
end
