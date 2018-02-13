class FavoriteJob < ApplicationRecord
  belongs_to :user, touch: true
  belongs_to :job, touch: true

  attr_accessor :current_user

  validates :job_id, uniqueness: { scope: :user_id }

  def liked?
    user_id == 1
  end
end
