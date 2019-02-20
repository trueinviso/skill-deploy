class EmployerJobExperience < ApplicationRecord
  belongs_to :job_experience
  belongs_to :job
end
