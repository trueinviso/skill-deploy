module ImageHelper
  def image_class(job)
    job
      .thumbnail_url
      .include?("empty_photo_state_icon") ?
        "image_empty" : "image_present"
  end
end
