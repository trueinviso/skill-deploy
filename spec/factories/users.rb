FactoryBot.define do
  factory :user do
    username { Faker::Internet::user_name }
    email { Faker::Internet::email }
    password { "changeme" }

    after(:create) do |user|
      create(:subscription, user: user)
      create(:gateway_customer, user: user)
    end

    factory :employer do
      after(:create) do |user|
        user.roles = [ FactoryBot.create(:role, :employer) ]
      end
    end

    factory :job_seeker do
      after(:create) do |user|
        user.roles = [ FactoryBot.create(:role, :job_seeker) ]
      end
    end

    [:canceled, :past_due, :active, :trialing, :unpaid].each do |status|
      trait "#{status}_subscriber".to_sym do
        after(:create) do |u|
          u.subscription.update_attributes(gateway_status: status)
        end
      end
    end
  end
end
