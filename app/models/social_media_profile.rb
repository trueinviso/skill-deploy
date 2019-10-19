class SocialMediaProfile < ApplicationRecord
  belongs_to :user

  validates :facebook,
    :instagram,
    :twitter,
    :website, url: true
end
