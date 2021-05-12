class WorkExperience < ApplicationRecord
  belongs_to :user

  validate :only_one_current_role

  private

  def only_one_current_role
    if user.work_experiences.count(&:current_role) > 1
     errors.add(:user, "can have only one current role")
    end
  end
end
