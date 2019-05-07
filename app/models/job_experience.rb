class JobExperience < ApplicationRecord
  has_many :jobs
  has_many :users

  validates :name,
    presence: true,
    uniqueness: true
end
