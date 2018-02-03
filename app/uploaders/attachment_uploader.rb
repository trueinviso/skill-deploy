class AttachmentUploader < Shrine
  plugin :default_url
  plugin :determine_mime_type
  plugin :remove_attachment
  plugin :validation_helpers
end
