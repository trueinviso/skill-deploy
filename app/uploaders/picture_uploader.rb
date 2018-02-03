class PictureUploader < AttachmentUploader
  plugin :store_dimensions

  Attacher.default_url do |_options|
    image_name = store.default_image_name

    ActionController::Base.helpers.image_path(image_name)
  end
end
