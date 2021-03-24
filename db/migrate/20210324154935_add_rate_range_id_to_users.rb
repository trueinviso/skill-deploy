class AddRateRangeIdToUsers < ActiveRecord::Migration[6.0]
  def change
    add_reference(:users, :rate_range, index: true, foreign_key: true)
  end
end
