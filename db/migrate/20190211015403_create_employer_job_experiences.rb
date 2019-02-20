class CreateEmployerJobExperiences < ActiveRecord::Migration[5.2]
  def change
    create_table :employer_job_experiences do |t|
      t.references :job_experience, foreign_key: true
      t.references :job, foreign_key: true

      t.timestamps
    end
  end
end
