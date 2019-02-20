class CreateJobExperiences < ActiveRecord::Migration[5.2]
  def change
    create_table :job_experiences do |t|
      t.references :job
      t.string :name, null: false
      t.text :description

      t.timestamps
    end
  end
end
