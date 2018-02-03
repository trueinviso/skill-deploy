class AddNotificationsToUserProfiles < ActiveRecord::Migration[5.1]
  def change
    add_column :user_profiles, :update_notifications, :boolean
    add_column :user_profiles, :weekly_newsletter, :boolean
  end
end
