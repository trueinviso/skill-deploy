class Job < ApplicationRecord
  include Filterable

  belongs_to :user

  has_many :employer_job_types, dependent: :destroy
  has_many :job_types, through: :employer_job_types

  has_many :employer_job_roles, dependent: :destroy
  has_many :job_roles, through: :employer_job_roles

  has_many :taggings, as: :taggable
  has_many :tags, through: :taggings

  def self.job_type_name(job_type_name)
    joins(:job_types)
      .where(
        "job_types.name = :job_type_name",
        job_type_name: job_type_name,
    )
  end

  def self.job_role_name(job_role_name)
    joins(:job_roles)
      .where(
        "job_roles.name = :job_role_name",
        job_role_name: job_role_name,
    )
  end

  def self.tag_name(tag_name)
    joins(:tags)
      .where(
        "tags.name = :tag_name",
        tag_name: tag_name,
    )
  end
end
