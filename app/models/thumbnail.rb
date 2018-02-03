class Thumbnail < Attachment
  include ThumbnailUploader::Attachment.new(:file)
end
