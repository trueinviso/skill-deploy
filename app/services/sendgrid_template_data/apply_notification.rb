class SendgridTemplateData
  class ApplyNotification < SendgridTemplateData
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
          "email": job.user.email,
        },
      ]
    end

    def template_id
      "d-2d778090ddcb43df8eec4e5241279503"
    end

    def dynamic_template_data
      {
        website_url: root_url,
        name: "#{user.first_name} #{user.last_name}",
        profile_url: employer_user_profile_url(user),
        avatar_url: user.thumbnail_url,
        headline: user.user_profile.headline,
        location: user.user_profile.location,
        job_title: job.name,
        company_name: job.company_name,
        about: user.user_profile.bio.body&.to_plain_text,
        skills: user.skills,
      }
    end
  end
end
