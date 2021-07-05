class SendgridTemplateData
  class ConfirmationInstructions < SendgridTemplateData
    attr_reader :record, :confirmation_url

    def initialize(record, confirmation_url)
      @record = record
      @confirmation_url = confirmation_url
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
      "d-7d45ed2e3da64e0b8d8b544342c7d7ba"
    end

    def dynamic_template_data
      {
        name: record.user_profile.first_name,
        confirmation_email: record.email,
        confirmation_url: confirmation_url,
      }
    end
  end
end
