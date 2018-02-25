class CreateAppliedFor < ActiveRecord::Migration[5.1]
  def change
    create_table :applied_fors do |t|
      t.integer :job_id
      t.integer :user_id

      t.timestamps null: false
    end

    add_index :applied_fors, [:user_id, :job_id], unique: true
  end
end
