class ApplicantsSerializer
  include JSONAPI::Serializer
  set_key_transform :camelcase

  attributes :first_name do |object|
    object.user_profile.first_name
  end

  attributes :last_name do |object|
    object.user_profile.last_name
  end

  attributes :avatar_url, &:thumbnail_url

  link :profile_url do |object, params|
    params[:context]
      .employer_applied_for_path(object.applied_for.find_by(job_id: params[:job].id))
  end
end
