class RemoveToValidationFromRateRange < ActiveRecord::Migration[6.0]
  def change
    remove_index :rate_ranges, :to
    change_column_null :rate_ranges, :to, true
  end
end
