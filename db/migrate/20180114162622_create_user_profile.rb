class CreateUserProfile < ActiveRecord::Migration[5.1]
  def change
    create_table :user_profiles do |t|
      t.references :user, index: true

      t.string :first_name
      t.string :last_name
      t.string :location
      t.text :bio
      t.string :headline
      t.boolean :update_notifications, default: false
      t.boolean :weekly_newsletter, default: false

      t.timestamps
    end
  end
end
