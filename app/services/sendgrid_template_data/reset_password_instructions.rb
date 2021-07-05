class SendgridTemplateData
  class ResetPasswordInstructions < SendgridTemplateData
    attr_reader :record, :token

    def initialize(record, token)
      @record = record
      @token = token
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
      "d-e021181d93c44d0ab3143ff5bf7d81d6"
    end

    def dynamic_template_data
      {
        name: record.first_name,
        reset_password_link: edit_user_password_url(reset_password_token: token),
        website_url: root_url,
      }
    end
  end
end
