require "image_processing/mini_magick"

class ThumbnailUploader < PictureUploader
  include ImageProcessing::MiniMagick
  plugin :upload_endpoint
  plugin :processing

  process(:store) do |io, context|
    resize_to_limit!(io.download, 800, 800) { |cmd| cmd.auto_orient }
  end

  def default_image_name
    "empty_photo_state_icon.png"
  end
end
