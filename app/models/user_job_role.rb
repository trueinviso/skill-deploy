class UserJobRole < ApplicationRecord
  belongs_to :job_role
  belongs_to :user
end
