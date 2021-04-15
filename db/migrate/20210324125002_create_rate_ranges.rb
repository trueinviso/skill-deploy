class CreateRateRanges < ActiveRecord::Migration[6.0]
  def change
    create_table :rate_ranges do |t|
      t.integer :from, null: false
      t.integer :to, null: false
      t.timestamps
    end

    add_index :rate_ranges, :from, unique: true
    add_index :rate_ranges, :to, unique: true
  end
end
