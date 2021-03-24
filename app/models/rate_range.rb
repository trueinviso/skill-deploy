class RateRange < ApplicationRecord
  validates :from, presence: true, uniqueness: true
  validates :to, presence: true, uniqueness: true
end
