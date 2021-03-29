FactoryBot.define do
  factory :user do
    email { "some_email@email.com" }
    username { "some_user" }
    password { "Passwd1" }
    payment_token { "some_payment_token" }
    gateway_customer_id { "some_gateway_customer_id" }

    trait :with_talent_role do
      after(:create) { |u| u.roles << create(:role, :talent) }
    end
  end
end