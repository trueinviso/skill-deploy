class AppliedFor < ApplicationRecord
  belongs_to :user, touch: true
  belongs_to :job, touch: true

  has_many :messages, dependent: :destroy

  validates :job_id, uniqueness: { scope: :user_id }
end
