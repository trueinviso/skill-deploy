class JobPolicy < ApplicationPolicy
  def index?
    user.present?
    # user.role?(:job_seeker)
  end
end
