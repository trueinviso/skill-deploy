class Job < ApplicationRecord
  LOCATIONS = { onsite: 0, remote: 1, onsite_or_remote: 2 }.freeze

  include Filterable
  include HasAttachments

  attachment :thumbnail
  has_rich_text :description

  enum location: LOCATIONS

  belongs_to :user

  has_many :employer_job_types, dependent: :destroy
  has_many :job_types, through: :employer_job_types

  has_many :employer_job_roles, dependent: :destroy
  has_many :job_roles, through: :employer_job_roles

  has_many :employer_job_experiences, dependent: :destroy
  has_many :job_experiences, through: :employer_job_experiences

  has_many :taggings, as: :taggable
  has_many :tags, through: :taggings

  accepts_nested_attributes_for :job_types

  validates_inclusion_of :remote, in: [true, false]

  validates :name,
    :company_name,
    :description,
    :location,
    presence: true

  validates :employer_job_types,
    :employer_job_roles,
    :employer_job_experiences,
    :remote,
    length: { minimum: 1 }

  validates :facebook,
    :instagram,
    :twitter,
    :company_website, url: true

  enum status: [:preview, :published]

  def self.job_type_name(job_type_name)
    joins(:job_types)
      .where(
        "job_types.name = :job_type_name",
        job_type_name: job_type_name.titleize,
    )
  end

  def self.job_role_name(job_role_name)
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
end
