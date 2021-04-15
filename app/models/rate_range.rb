class RateRange < ApplicationRecord
  has_many :users

  validates :from, presence: true, uniqueness: true
  validates :to, presence: true, uniqueness: true
end
