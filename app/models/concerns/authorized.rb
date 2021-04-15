module Authorized
  extend ActiveSupport::Concern

  included do
    has_many :user_roles, dependent: :destroy
    has_many :roles, through: :user_roles

    has_many :user_permissions, dependent: :destroy
    has_many :permissions, through: :user_permissionss
  end

  def talent?
    roles.where(name: Role::TALENT).exists?
  end
end