class CreateUserJobLocation < ActiveRecord::Migration[6.0]
  def change
    create_table :user_job_locations do |t|
      t.references :job_location, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
