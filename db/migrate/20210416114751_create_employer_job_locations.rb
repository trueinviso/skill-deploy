class CreateEmployerJobLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :employer_job_locations do |t|
      t.references :job, null: false, foreign_key: true
      t.references :job_location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
