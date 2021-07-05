class SendgridTemplateData
  class CancelSubscription < SendgridTemplateData
    attr_reader :user

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
      "d-c54674fd878749f3acf98688cb82d649"
    end

    def dynamic_template_data
      {
        name: user.user_profile.first_name,
        cancellation_date: user.subscription.cancellation_date,
      }
    end
  end
end
