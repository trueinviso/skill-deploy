class ThumbnailUploader < PictureUploader
  Attacher.validate do
    next unless Rails.env.production?

    validate_max_size(48)
  end

  def default_image_name
    "empty_photo_state_icon.png"
  end
end
