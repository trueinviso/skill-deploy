require "image_processing/mini_magick"

class ThumbnailUploader < PictureUploader
  include ImageProcessing::MiniMagick
  plugin :upload_endpoint
  plugin :processing
  plugin :versions

  process(:store) do |io, _context|
    original = io.download
    pipeline = ImageProcessing::MiniMagick.source(original)

    size800 = pipeline.resize_to_limit!(800, 800)
    size500 = pipeline.resize_to_limit!(500, 500)
    size300 = pipeline.resize_to_limit!(300, 300)

    original.close!

    { original: io, large: size800, medium: size500, small: size300 }
  end

  def default_image_name
    "empty_photo_state_icon.png"
  end
end
