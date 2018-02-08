class CreateAttachments < ActiveRecord::Migration[5.1]
  def change
    create_table :attachments do |t|
      t.string :name
      t.string :attachable_type
      t.references :attachable, polymorphic: true, index: true
      t.jsonb :file_data, default: {}
      t.string :type

      t.timestamps
    end
  end
end
