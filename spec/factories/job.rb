FactoryBot.define do
  factory :job do
    name { "name" }
    company_name { "company" }
    description { "some desctiption" }
    location { "UTC" }
    user
    after(:build) { |job| job.job_types << create(:job_type) }
    after(:build) { |job| job.job_roles << create(:job_role) }
    after(:build) { |job| job.job_locations << create(:job_location) }
    after(:build) { |job| job.job_experiences << create(:job_experience) }
  end
end
