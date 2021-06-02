class AppliersSerializer
  include JSONAPI::Serializer
  set_key_transform :camelcase

  attributes :first_name do |object|
    object.user_profile.first_name
  end

  attributes :last_name do |object|
    object.user_profile.last_name
  end

  attributes :avatar_url, &:thumbnail_url

  link :profile_url do |object|
    # need 203 PR for this link/route
  end
end
