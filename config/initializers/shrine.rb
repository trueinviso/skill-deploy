require "shrine"

if Rails.env.test?
  require "shrine/storage/memory"

  Shrine.storages = {
    cache: Shrine::Storage::Memory.new,
    store: Shrine::Storage::Memory.new,
  }
elsif Rails.env.development?
  require "shrine/storage/file_system"

  Shrine.storages = {
    cache: Shrine::Storage::FileSystem.new("public", prefix: "uploads/cache"), # temporary
    store: Shrine::Storage::FileSystem.new("public", prefix: "uploads/store"), # permanent
  }
else
  require "shrine/storage/s3"

  s3_options = {
    access_key_id:     ENV.fetch("AWS_ACCESS_KEY_ID"),
    secret_access_key: ENV.fetch("AWS_SECRET_ACCESS_KEY"),
    region:            ENV.fetch("AWS_REGION"),
    bucket:            ENV.fetch("AWS_BUCKET"),
  }

  cache_storage = Shrine::Storage::S3.new(
    prefix: "cache",
    **s3_options,
  )

  store_storage = Shrine::Storage::S3.new(
    prefix: "store",
    **s3_options,
  )

  Shrine.storages = {
    cache: cache_storage,
    store: store_storage,
  }
end

Shrine.plugin :activerecord # for AR integration
Shrine.plugin :cached_attachment_data # for forms
# Shrine.plugin :upload_endpoint # for direct upload ajax
Shrine.plugin :instrumentation
Shrine.logger = Rails.logger
Shrine.plugin :remote_url, max_size: 20 * 1024 * 1024 # remote_url support, max 20mb
Shrine.plugin :restore_cached_data # for pulling metadata after a direct upload
