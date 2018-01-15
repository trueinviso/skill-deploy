class CreateEmployerJobRoles < ActiveRecord::Migration[5.1]
  def change
    create_table :employer_job_roles do |t|
      t.references :job_role, foreign_key: true
      t.references :job, foreign_key: true

      t.timestamps
    end
  end
end
