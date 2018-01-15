employer = Role.find_by(name: "Employer")
user_role = Role.find_by(name: "User")

User.seed_once(:email) do |user|
  user.id = 1
  user.email = "keith.ward@bethel.com"
  user.roles = [employer]
end

User.seed_once(:email) do |user|
  user.id = 2
  user.email = "customer@gmail.com"
  user.roles = [user_role]
end

User.all.map { |u| u.update_attributes!(password: "asdfasdf", password_confirmation: "asdfasdf") }
