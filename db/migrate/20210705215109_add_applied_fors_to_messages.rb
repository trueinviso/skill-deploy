class AddAppliedForsToMessages < ActiveRecord::Migration[6.0]
  def change
    change_table :messages do |t|
      t.references :applied_for, foreign_key: true
    end
  end
end
