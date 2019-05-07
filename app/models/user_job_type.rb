class UserJobType < ApplicationRecord
  belongs_to :job_type
  belongs_to :user
end
