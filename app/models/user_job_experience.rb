class UserJobExperience < ApplicationRecord
  belongs_to :job_experience
  belongs_to :user
end
