class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_one :user_profile, dependent: :destroy
  has_many :user_permissions, dependent: :destroy

  has_many :user_roles, dependent: :destroy
  has_many :roles, through: :user_roles

  has_many :jobs

  accepts_nested_attributes_for :user_profile
  accepts_nested_attributes_for :user_roles

  def role?(role)
    roles.any? { |r| r.name.underscore.to_sym == role }
  end
end
