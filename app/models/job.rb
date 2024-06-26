class Job < ApplicationRecord
  include Filterable
  include HasAttachments

  attachment :thumbnail
  has_rich_text :description

  belongs_to :user

  has_many :employer_job_types, dependent: :destroy
  has_many :job_types, through: :employer_job_types

  has_many :employer_job_roles, dependent: :destroy
  has_many :job_roles, through: :employer_job_roles

  has_many :employer_job_experiences, dependent: :destroy
  has_many :job_experiences, through: :employer_job_experiences

  has_many :employer_job_locations, dependent: :destroy
  has_many :job_locations, through: :employer_job_locations

  has_many :taggings, as: :taggable
  has_many :tags, through: :taggings

  has_many :applied_for, dependent: :destroy
  has_many :applicants, through: :applied_for, source: :user

  accepts_nested_attributes_for :job_types

  validates :name,
    :company_name,
    :description,
    :location,
    presence: true,
    unless: -> { draft? || archived? }

  validates :employer_job_types,
    :employer_job_roles,
    :employer_job_experiences,
    :employer_job_locations,
    length: { minimum: 1 },
    unless: -> { draft? || archived? }

  validates :facebook,
    :instagram,
    :twitter,
    :company_website, url: true,
    unless: -> { draft? || archived? }

  enum status: [:preview, :published, :archived, :draft]

  def self.job_type_name(names)
    job_type_names = names.split(",")

    joins(:job_types)
      .where(job_types: { name: job_type_names })
  end

  def self.job_role_name(job_role_name)
    return all if job_role_name == "All"

    joins(:job_roles)
      .where(
        "job_roles.name = :job_role_name",
        job_role_name: job_role_name.titleize,
    )
  end

  def self.tag_name(tag_name)
    joins(:tags)
      .where(
        "tags.name = :tag_name",
        tag_name: tag_name,
    )
  end

  def self.search(search)
    where("jobs.name ILIKE :search OR " \
          "jobs.location ILIKE :search OR " \
          "jobs.company_name ILIKE :search",
      search: "%#{search}%")
  end

  def social_links
    {
      instagram: instagram,
      facebook: facebook,
      twitter: twitter,
    }
  end

  def published_with_applicants?
    published? && applicants.any?
  end
end
