class UserProfile < ApplicationRecord
  has_person_name

  belongs_to :user
  validates :first_name, :last_name, presence: true
end
