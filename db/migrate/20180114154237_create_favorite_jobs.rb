class CreateFavoriteJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :favorite_jobs do |t|
      t.integer :job_id
      t.integer :user_id

      t.timestamps null: false
    end

    add_index :favorite_jobs, [:user_id, :job_id], unique: true
  end
end
