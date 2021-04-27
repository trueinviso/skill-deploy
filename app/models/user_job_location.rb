class UserJobLocation < ApplicationRecord
  belongs_to :job_location
  belongs_to :user
end
