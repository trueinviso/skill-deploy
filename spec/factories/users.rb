FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "user#{n}@test.com" }
    username { "some_user" }
    password { "password" }
    payment_token { "some_payment_token" }
    gateway_customer_id { "some_gateway_customer_id" }
    confirmed_at { Time.now }

    trait :with_talent_role do
      after(:create) { |u| u.roles << create(:role, :talent) }
    end

    trait :with_employer_role do
      after(:create) { |u| u.roles << Role.find_or_create_by(name: "Employer") }
    end

    trait :with_admin_role do
      after(:create) { |u| u.roles << create(:role, :admin) }
    end
  end
end
