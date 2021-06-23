class UserProfile < ApplicationRecord
  STATUSES = { draft: 0, approved: 1, blocked: 2, pending: 3 }.freeze

  has_person_name
  has_rich_text :bio

  enum status: STATUSES

  belongs_to :user
  validates :first_name, :last_name, :status, presence: true
  validates :bio,
    :headline,
    :location,
    presence: true,
    on: :update,
    if: :pending?
end
