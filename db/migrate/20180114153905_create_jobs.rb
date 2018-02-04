class CreateJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :jobs do |t|
      t.references :user
      t.string :name
      t.string :company_name
      t.string :company_website
      t.integer :experience
      t.string :location
      t.boolean :remote
      t.text :world_changing_text
      t.text :description
      t.string :contact_name
      t.string :contact_email
    end
  end
end
