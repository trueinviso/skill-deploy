class EmployerJobType < ApplicationRecord
  belongs_to :job_type
  belongs_to :job
end
