class ThumbnailsController < ApplicationController
  def update
    current_user.update!(update_params)
    @user = current_user

    respond_to do |format|
      format.js
    end
  end

  def destroy
    current_user.thumbnail.destroy
    @user = current_user.reload

    respond_to do |format|
      format.js
    end
  end

  private

  def update_params
    params.require(:user).permit(thumbnail_attributes: [:file])
  end
end
