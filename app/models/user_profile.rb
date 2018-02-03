class UserProfile < ApplicationRecord
  include HasAttachments

  belongs_to :user
  attachment :thumbnail
end
