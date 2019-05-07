class CreateUserJobExperience < ActiveRecord::Migration[6.0]
  def change
    create_table :user_job_experiences do |t|
      t.references :job_experience, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
