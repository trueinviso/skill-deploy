class JobPolicy < ApplicationPolicy
  def index?
    # user.role?(:job_seeker)
    true
  end
end
