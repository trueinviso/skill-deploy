class CreateJobRole < ActiveRecord::Migration[5.1]
  def change
    create_table :job_roles do |t|
      t.references :job
      t.string :name, null: false
      t.string :description

      t.timestamps
    end
  end
end
