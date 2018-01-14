class CreateCategorizations < ActiveRecord::Migration[5.1]
  def change
    create_table :categorizations do |t|
      t.references :category, foreign_key: true
      t.references :job, foreign_key: true
    end
  end
end
