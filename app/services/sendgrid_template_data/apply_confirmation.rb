class SendgridTemplateData
  class ApplyConfirmation < SendgridTemplateData
    attr_reader :user, :job

    def initialize(user, job)
      @user = user
      @job = job
    end

    def call
      data
    end

    private

    def personalizations
      {
        "to": to,
        "dynamic_template_data": dynamic_template_data,
      }
    end

    def to
      [
        {
          "email": user.email,
        },
      ]
    end

    def template_id
      "d-3f9748fca35f4e58a2712ad010362665"
    end

    def dynamic_template_data
      {
        button_url: root_url,
        company_name: job.company_name,
        job_listing_name: job.name,
        job_listing_url: job_url(job),
        logo_url: job.thumbnail_url,
        name: user.first_name,
        skills: skills,
      }
    end

    def skills
      [
        job.job_roles.first&.name,
        job.job_types.first&.name,
        job.job_experiences.first&.name,
        job.job_locations.first&.name,
      ]
    end
  end
end
