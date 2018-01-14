class UserProfile < ApplicationRecord
  belongs_to :user

  # before_validation :generate_screen_name, on: :create
  # validates :first_name, :last_name, presence: true
  # validates :screen_name, presence: true

  delegate :email, to: :user

  # We generate a guaranteed-unique screen name on create
  # validate :validate_screen_name_available, on: :update

  # def full_name
  #   "#{first_name} #{last_name}"
  # end

  # # Ensure we aren't updating to a screen name that's already taken
  # def validate_screen_name_available
  #   if !ScreenNameAvailability.available?(screen_name, self)
  #     errors.add(:screen_name, "is already taken")
  #   end
  # end

  # # Assign a screen name on create
  # def generate_screen_name
  #   self.screen_name = ScreenNameGenerator.generate(self)
  # end
end
