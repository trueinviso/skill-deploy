class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.references :sender, index: true, null: false, foreign_key: { to_table: :users }
      t.references :recipient, index: true, null: false, foreign_key: { to_table: :users }
      t.text :body

      t.timestamps
    end
  end
end
