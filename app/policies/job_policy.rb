class JobPolicy < ApplicationPolicy
  def index?
    user.role?(:job_seeker)
  end
end
