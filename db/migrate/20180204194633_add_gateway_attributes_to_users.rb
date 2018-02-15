class AddGatewayAttributesToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :payment_token, :string
    add_column :users, :gateway_customer_id, :string
  end
end
