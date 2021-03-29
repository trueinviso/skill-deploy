module HasRoles
  extend ActiveSupport::Concern

  included do
    has_many :user_roles, dependent: :destroy
    has_many :roles, through: :user_roles
  end

  def has_talent_role?
    roles.where(name: Role::TALENT).exists?
  end
end