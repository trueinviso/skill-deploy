class CreateSocialMediaProfile < ActiveRecord::Migration[6.0]
  def change
    create_table :social_media_profiles do |t|
      t.references :user, index: true

      t.string :behance
      t.string :codepen
      t.string :dribbble
      t.string :facebook
      t.string :github
      t.string :instagram
      t.string :linked_in
      t.string :medium
      t.string :twitter
      t.string :vimeo
      t.string :website
    end
  end
end
