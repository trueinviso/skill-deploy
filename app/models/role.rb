class Role < ApplicationRecord
  TALENT = "Talent".freeze

  has_many :user_roles, dependent: :destroy
  has_many :users, through: :user_roles

  validates :name, presence: true, uniqueness: true

  def talent?
    name.eql?(TALENT)
  end
end
