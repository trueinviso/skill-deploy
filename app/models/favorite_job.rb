class FavoriteJob < ApplicationRecord
  belongs_to :user, touch: true
  belongs_to :job, touch: true

  validates :job_id, uniqueness: { scope: :user_id }
end
