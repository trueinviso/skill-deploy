class Job < ApplicationRecord
  belongs_to :user

  has_many :employer_job_types, dependent: :destroy
  has_many :job_types, through: :employer_job_types

  has_many :employer_job_roles, dependent: :destroy
  has_many :job_roles, through: :employer_job_roles

  has_many :taggings, as: :taggable
  has_many :tags, through: :taggings
end
