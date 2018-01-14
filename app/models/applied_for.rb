class FavoriteScreen < ApplicationRecord
  belongs_to :user, touch: true
  belongs_to :screen, touch: true

  validates :screen_id, uniqueness: { scope: :user_id }
end
