class JobPolicy < ApplicationPolicy
  def index?
    !user.pending_talent?
  end

  def show?
    !user.pending_talent?
  end
end
