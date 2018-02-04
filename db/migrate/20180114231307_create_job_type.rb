class CreateJobType < ActiveRecord::Migration[5.1]
  def change
    create_table :job_types do |t|
      t.string :name, null: false
      t.references :job
      t.string :description

      t.timestamps
    end
  end
end
