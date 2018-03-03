class CreateSubscriptionPlans < ActiveRecord::Migration[5.1]
  def change
    create_table :subscription_plans do |t|
      t.string :gateway_id, null: false
      t.string :period, null: false
      t.string :price, null: false
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
