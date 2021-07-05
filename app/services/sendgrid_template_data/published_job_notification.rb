class SendgridTemplateData
  class PublishedJobNotification < SendgridTemplateData
    attr_reader :job

    def initialize(job)
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
      "d-d746e27796cc4f13b153e4188da91d99"
    end

    def dynamic_template_data
      {
        website_url: root_url,
        job_listing_url: job_url(job),
      }
    end
  end
end
