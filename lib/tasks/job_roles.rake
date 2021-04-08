namespace :job_roles do
  task replace_marketing_with_video: :environment do
    desc "Replace marketing role with video"

    marketing = JobRole.find_by!(name: "Marketing")
    marketing.assign_attributes(name: "Video").save(touch: false)
  end
end
