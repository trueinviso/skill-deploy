class UpdateJobsLocationField < ActiveRecord::Migration[6.0]
  def change
    change_table :jobs do |t|
      t.remove :location
      t.integer :location
      t.remove :remote
    end
  end
end
