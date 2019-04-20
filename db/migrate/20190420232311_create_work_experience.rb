class CreateWorkExperience < ActiveRecord::Migration[6.0]
  def change
    create_table :work_experiences do |t|
      t.belongs_to :user, index: true
      t.string :title
      t.string :company
      t.datetime :start
      t.datetime :end
      t.boolean :current_role, default: false

      t.timestamps
    end
  end
end
