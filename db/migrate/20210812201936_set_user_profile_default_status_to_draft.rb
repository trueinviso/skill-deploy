class SetUserProfileDefaultStatusToDraft < ActiveRecord::Migration[6.0]
  def change
    change_column_default :user_profiles, :status, 0
  end
end
