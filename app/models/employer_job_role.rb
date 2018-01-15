class EmployerJobRole < ApplicationRecord
  belongs_to :job_role
  belongs_to :job
end
