class JobPolicy < ApplicationPolicy
  def index?
    user.present?
  end
end
