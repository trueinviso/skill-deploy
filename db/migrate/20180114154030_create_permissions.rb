class CreatePermissions < ActiveRecord::Migration[5.1]
  def change
    create_table :permissions do |t|
      t.string :name
      t.string :slug
      t.string :display_name
      t.string :short_description
      t.text :description

      t.timestamps
    end
  end
end
