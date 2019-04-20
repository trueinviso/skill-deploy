class CreateUserJobTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :user_job_types do |t|
      t.belongs_to :job_type, index: true
      t.belongs_to :user, index: true

      t.timestamps
    end
  end
end
