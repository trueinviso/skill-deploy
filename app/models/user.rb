class User < ApplicationRecord
  acts_as_token_authenticatable

  include HasAttachments
  attachment :thumbnail

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, omniauth_providers: %i[google_oauth2]

  has_one :user_profile, dependent: :destroy
  has_many :user_permissions, dependent: :destroy

  has_many :user_roles, dependent: :destroy
  has_many :roles, through: :user_roles

  has_many :jobs
  has_many :subscriptions

  accepts_nested_attributes_for :user_profile
  accepts_nested_attributes_for :user_roles

  def assign_role(role)
    name = role.to_s.humanize.split.map(&:capitalize).join(' ')
    role = Role.find_by(name: name)
    roles << role unless roles.include?(role) || role.nil?
  end

  def role?(role)
    roles.any? { |r| r.name.parameterize.underscore.to_sym == role }
  end

  def paying_subscriber?
    subscriptions.any?
  end

  def unlimited?
    subscriptions.any? { |s| s.active? && s.unlimited? }
  end

  def unlimited_subscription
    subs = subscriptions.select { |s| s.active? && s.unlimited? }
    raise MultipleUnlimitedError if subs.count > 1
    subs.first
  end

	def self.from_omniauth(auth)
    user = User.where(email: auth.info.email).first

    unless user
      user = User.create(
        email: auth.info.email,
        password: Devise.friendly_token[0,20],
        provider: auth.provider,
        uid: auth.uid,
      )
      if !user.errors.any?
        user.assign_role(:job_seeker)
        if Unity.config.stripe?
          Unity::StripeGateway::CustomerCreator.call!(user)
        end
      end
    end
    user
  end

  class MultipleUnlimitedError < StandardError; end
end
