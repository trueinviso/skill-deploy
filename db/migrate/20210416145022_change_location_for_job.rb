class ChangeLocationForJob < ActiveRecord::Migration[6.0]
  def change
    change_table :jobs do |t|
      t.remove :location
      t.string :location
    end
  end
end
