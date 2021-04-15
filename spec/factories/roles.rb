FactoryBot.define do
  factory :role do
    name { "Some role" }

    trait :talent do
      name { "Talent" }
    end
  end
end