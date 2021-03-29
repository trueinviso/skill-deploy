class MoveStatusFromUserToProfile < ActiveRecord::Migration[6.0]
  USER_STATUSES = { pending: 0, complete: 1 }.freeze

  def change
    add_column :user_profiles, :status, :integer,
               null: false, default: UserProfile::STATUSES[:pending]

    update_user_statuses
    remove_column :users, :review_status, :integer
  end

  def update_user_statuses
    UserProfile.where(
      user_id: User.where(review_status: USER_STATUSES[:complete]).select(:id)
    ).update(status: UserProfile::STATUSES[:approved])
  end
end
