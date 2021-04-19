FactoryBot.define do
  factory :role do
    name { "Some role" }

    trait :talent do
      name { "Talent" }
    end

    trait :employer do
      name { "Employer" }
    end
  end
end
