class CreateUserJobRoles < ActiveRecord::Migration[6.0]
  def change
    create_table :user_job_roles do |t|
      t.belongs_to :job_role, index: true
      t.belongs_to :user, index: true

      t.timestamps
    end
  end
end
