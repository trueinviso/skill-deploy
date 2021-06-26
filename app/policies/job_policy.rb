class JobPolicy < ApplicationPolicy
  def index?
    Protocols::CanViewJobBoard.allow?(user)
  end

  def show?
    Protocols::CanViewJobBoard.allow?(user)
  end
end
