class SendgridTemplateData
  class PasswordChange < SendgridTemplateData
    attr_reader :record

    def initialize(record)
      @record = record
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
          "email": record.email,
        },
      ]
    end

    def template_id
      "d-77437192fa3e4c2083b992c444575f4e"
    end

    def dynamic_template_data
      {
        name: record.first_name,
        brand_name: "Skill deploy",
        account_link: new_user_session_url,
        website_url: root_url,
      }
    end
  end
end
