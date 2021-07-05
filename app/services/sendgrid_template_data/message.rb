class SendgridTemplateData
  class Message < SendgridTemplateData
    attr_reader :message, :applied_for

    def initialize(message, applied_for)
      @message = message
      @applied_for = applied_for
    end

    def call
      data
    end

    private

    def personalizations
      {
        "to": to,
        "bcc": bcc,
        "dynamic_template_data": dynamic_template_data,
      }
    end

    def to
      [
        {
          "email": message.recipient.email,
        },
      ]
    end

    def bcc
      [
        {
          "email": message.sender.email,
        },
      ]
    end

    def template_id
      "d-c5d9bd7f8a51475ea8852e84b481d25d"
    end

    def dynamic_template_data
      {
        name: "#{message.sender.first_name} #{message.sender.last_name}",
        company_name: applied_for.job.company_name,
        body: message.body,
        website_url: root_url,
        reply_email: message.sender.email,
      }
    end
  end
end
