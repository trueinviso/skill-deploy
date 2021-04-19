FactoryBot.define do
  factory :user_profile do
    status { :approved }
    first_name { "The first" }
    last_name { "The last" }
  end
end
