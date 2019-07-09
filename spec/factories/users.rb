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
        employer = Role.find_or_create_by(name: "Employer")
        user.roles = [employer]
      end
    end

    factory :job_seeker do
      after(:create) do |user|
        job_seeker = Role.find_or_create_by(name: "Job Seeker")
        user.roles = [job_seeker]
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
