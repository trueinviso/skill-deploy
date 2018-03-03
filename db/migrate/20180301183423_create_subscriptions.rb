class CreateSubscriptions < ActiveRecord::Migration[5.1]
  def change
    create_table :subscriptions do |t|
      t.references :user, index: true
      t.references :subscription_plan, index: true
      t.string :gateway_id
      t.integer :gateway_status

      t.timestamps
    end
  end
end
