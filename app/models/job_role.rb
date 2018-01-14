class JobRole < ApplicationRecord
  has_many :jobs

  has_many :taggings, as: :taggable
  has_many :tags, through: :taggings
end
