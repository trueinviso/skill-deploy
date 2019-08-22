class AddReviewStatusToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :review_status, :integer
    add_index :users, :review_status
  end
end
