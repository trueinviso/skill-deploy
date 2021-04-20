employer = Role.find_by(name: "Employer")
user_role = Role.find_by(name: "Job Seeker")

User.seed_once(:email) do |user|
  user.id = 1
  user.email = "keith.ward@bethel.com"
  user.username = Forgery("internet").user_name
  user.roles = [employer]
end

User.seed_once(:email) do |user|
  user.id = 2
  user.email = "customer@gmail.com"
  user.username = Forgery("internet").user_name
  user.roles = [user_role]
end

User.all.map { |u| u.update!(password: "asdfasdf") }

UserProfile.seed(:id,
  {
    id: 1,
    user_id: 1,
    first_name: Forgery("name").first_name,
    last_name: Forgery("name").last_name,
    location: Forgery("address").city,
  },
  {
    id: 2,
    user_id: 2,
    first_name: Forgery("name").first_name,
    last_name: Forgery("name").last_name,
    location: Forgery("address").city,
  })

SocialMediaProfile.seed(:id,
  {
    id: 1,
    user_id: 1,
    website: Forgery("internet").domain_name,
  },
  {
    id: 2,
    user_id: 2,
    website: Forgery("internet").domain_name,
  })
