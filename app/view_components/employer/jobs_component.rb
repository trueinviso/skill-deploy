module Employer
  class JobsComponent

    def initialize(jobs)
      @jobs = jobs
    end

    def header
      "Manage Listings"
    end

    def preview
      @jobs.preview
    end

    def published
      @jobs.published
    end

    def archived
      @jobs.archived
    end
  end
end
