class User < ApplicationRecord
  include Authorized
  include HasAttachments

  attachment :thumbnail
  acts_as_token_authenticatable

  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :confirmable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, omniauth_providers: %i[google_oauth2]

  belongs_to :rate_range, optional: true

  has_one :user_profile, dependent: :destroy
  has_one :social_media_profile, dependent: :destroy
  has_many :user_permissions, dependent: :destroy

  has_many :user_roles, dependent: :destroy
  has_many :roles, through: :user_roles

  has_many :user_job_types, dependent: :destroy
  has_many :job_types, through: :user_job_types

  has_many :user_job_roles, dependent: :destroy
  has_many :job_roles, through: :user_job_roles

  has_many :user_job_experiences, dependent: :destroy
  has_many :job_experiences, through: :user_job_experiences

  has_many :user_job_locations, dependent: :destroy
  has_many :job_locations, through: :user_job_locations

  has_many :applied_for, dependent: :destroy
  has_many :applied_jobs, through: :applied_for, source: :job

  has_many :messages, class_name: "Message", foreign_key: "recipient_id"
  has_many :sent_messages, class_name: "Message", foreign_key: "sender_id"

  has_many :work_experiences

  has_many :jobs

  ########### Unity Gateway Models
  has_one :subscription,
    class_name: "Unity::Subscription"
  has_one :payment_method,
    class_name: "Unity::PaymentMethod"
  has_one :gateway_customer,
    class_name: "Unity::GatewayCustomer"
  #################################

  accepts_nested_attributes_for :user_profile
  accepts_nested_attributes_for :user_roles
  accepts_nested_attributes_for :social_media_profile
  accepts_nested_attributes_for :job_roles
  accepts_nested_attributes_for :user_job_roles
  accepts_nested_attributes_for :job_types
  accepts_nested_attributes_for :user_job_types

  accepts_nested_attributes_for :work_experiences,
    reject_if: :all_blank,
    allow_destroy: true

  validates_associated :user_profile

  enum review_status: { pending: 0, complete: 1 }

  def first_name
    user_profile&.name&.first
  end

  def last_name
    user_profile&.name&.last
  end

  def active_paid_subscriber?
    return false if gateway_customer.blank?
    return false if subscription.blank?

    subscription.active?
  end

  def assign_role(role)
    name = role.to_s.humanize.split.map(&:capitalize).join(" ")
    role = Role.find_by(name: name)
    roles << role unless roles.include?(role) || role.nil?
  end

  def role?(role)
    roles.any? { |r| r.name.parameterize.underscore.to_sym == role }
  end

  def paying_subscriber?
    subscription&.active?
  end

  def registering?
    roles.empty?
  end

  def pending_talent?
    registering? ||
      (talent_only? && !user_profile&.approved?)
  end

  def approve!
    talent_role = Role.find_by(name: Role::TALENT)

    if !roles.include?(talent_role)
      roles << talent_role
    end

    user_profile.approved!
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
        password: Devise.friendly_token[0, 20],
        provider: auth.provider,
        uid: auth.uid,
      )
      if user.errors.none?
        user.assign_role(:job_seeker)
        if Unity.config.stripe?
          Unity::StripeGateway::CustomerCreator.call!(user)
        end
      end
    end
    user
  end

  class MultipleUnlimitedError < StandardError; end

  private

  def send_devise_notification(notification, *args)
    devise_mailer.send(notification, self, *args).deliver_later
  end
end
