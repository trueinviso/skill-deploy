class AddLinksToJob < ActiveRecord::Migration[5.2]
  def change
    add_column :jobs, :twitter, :string
    add_column :jobs, :facebook, :string
    add_column :jobs, :instagram, :string

    remove_column :jobs, :world_changing_text
    remove_column :jobs, :experience
  end
end
