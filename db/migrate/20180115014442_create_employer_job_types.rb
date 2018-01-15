class CreateEmployerJobTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :employer_job_types do |t|
      t.references :job_type, foreign_key: true
      t.references :job, foreign_key: true

      t.timestamps
    end
  end
end
