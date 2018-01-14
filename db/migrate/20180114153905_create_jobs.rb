class CreateJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :jobs do |t|
      t.references :user
      t.string :name
      t.string :company_name
      t.string :location
      t.boolean :remote
    end
  end
end
