FactoryBot.define do
  factory :role do
    name { "Some role" }

    trait :talent do
      name { "Job Seeker" }
    end

    trait :employer do
      name { "Employer" }
    end
  end
end
