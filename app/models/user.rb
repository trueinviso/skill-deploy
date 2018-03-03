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

  def paying_subscriber?
    subscriptions.any?
  end

  def unlimited?
    subscriptions.any? { |s| s.active? && s.unlimited? }
  end
end
