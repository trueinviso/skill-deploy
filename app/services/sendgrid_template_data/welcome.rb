class SendgridTemplateData
  class Welcome < SendgridTemplateData
    attr_reader :user, :job

    def initialize(user)
      @user = user
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
      "d-20d9028e043e4cc4a802e6fa4aaec137"
    end

    def dynamic_template_data
      {
        name: user.first_name,
        sign_in_url: new_user_session_url,
      }
    end
  end
end
