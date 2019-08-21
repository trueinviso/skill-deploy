FactoryBot.define do
  factory :role do

    trait :job_seeker do
      name { 'Job Seeker' }
    end

    trait :employer do
      name { 'employer' }
    end
  end
end
