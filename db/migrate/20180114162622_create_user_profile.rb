class CreateUserProfile < ActiveRecord::Migration[5.1]
  def change
    create_table :user_profiles do |t|
      t.references :user

      t.string :first_name
      t.string :last_name
      t.string :location
      t.string :website
      t.text :bio
      t.string :twitter
      t.string :facebook
      t.string :linked_in
      t.string :dribbble
      t.string :github
      t.string :codepen
      t.string :medium
      t.string :behance
      t.string :instagram
      t.string :vimeo
      t.boolean :update_notifications, default: false
      t.boolean :weekly_newsletter, default: false
    end
  end
end
