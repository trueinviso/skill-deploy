class SendgridTemplateData
  class ApplyNotification < SendgridTemplateData
    attr_reader :user, :job, :applied_for

    def initialize(user, job, applied_for)
      @user = user
      @job = job
      @applied_for = applied_for
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
          "email": job.user.email,
        },
      ]
    end

    def template_id
      "d-2d778090ddcb43df8eec4e5241279503"
    end

    def dynamic_template_data
      {
        about: user.user_profile.bio.body&.to_plain_text,
        avatar_url: user.thumbnail_url,
        company_name: job.company_name,
        headline: user.user_profile.headline,
        job_listing_url: job_url(job),
        job_title: job.name,
        location: user.user_profile.location,
        name: "#{user.first_name} #{user.last_name}",
        profile_url: employer_applicant_url(applied_for),
        skills: skills,
        website_url: root_url,
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
