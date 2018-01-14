class Tag < ApplicationRecord
  has_many :taggings
  has_many :jobs,
    through: :taggings,
    source: :taggable,
    source_type: "Job"

  validates :name, presence: true, uniqueness: true
end
