class User < ApplicationRecord
  acts_as_token_authenticatable

  include HasAttachments
  attachment :thumbnail

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_one :user_profile, dependent: :destroy
  has_many :user_permissions, dependent: :destroy

  has_many :user_roles, dependent: :destroy
  has_many :roles, through: :user_roles

  has_many :jobs
  has_many :subscriptions

  accepts_nested_attributes_for :user_profile
  accepts_nested_attributes_for :user_roles

  def role?(role)
    roles.any? { |r| r.name.parameterize.underscore.to_sym == role }
  end

  def build_json
    {
      email: email,
      bio: user_profile.bio,
      first_name: user_profile.first_name,
      last_name: user_profile.last_name,
      twitter: user_profile.twitter,
      facebook: user_profile.facebook,
      linked_in: user_profile.linked_in,
      dribbble: user_profile.dribbble,
      github: user_profile.github,
      codepen: user_profile.codepen,
      medium: user_profile.medium,
      behance: user_profile.behance,
      instagram: user_profile.instagram,
      vimeo: user_profile.vimeo,
    }
  end
end
