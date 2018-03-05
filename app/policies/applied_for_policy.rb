class AppliedForPolicy < ApplicationPolicy
  def create?
    return user.role?(:job_seeker) if !record.present?
    user.role?(:job_seeker) && record.user_id == user.id
  end
end
