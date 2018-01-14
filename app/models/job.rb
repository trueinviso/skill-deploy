class Job < ApplicationRecord
  belongs_to :user

  has_one :job_type
  has_one :job_role

  has_many :taggings, as: :taggable
  has_many :tags, through: :taggings
end
