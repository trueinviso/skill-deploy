class EmployerJobLocation < ApplicationRecord
  belongs_to :job_location
  belongs_to :job
end