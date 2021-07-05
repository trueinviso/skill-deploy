class SendgridTemplateData
  class SubscriptionReceipt < SendgridTemplateData
    attr_reader :user, :result

    def initialize(user, result)
      @user = user
      @result = result
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
      "d-bb4ebaae730d4c36b14f5a9a7b7514c7"
    end

    def dynamic_template_data
      {
        name: user.user_profile.first_name,
        subscription_name: result.result.plan.id.gsub("_", " ").capitalize,
        price: "$#{result.result.plan.amount / 100.0}/month",
        renew_date: "30 days",
        purchase_date: Time.at(result.result.start_date).strftime("%B %d, %Y"),
        amount_paid: "$#{result.result.plan.amount / 100.0}",
        login_url:  new_user_session_path,
      }
    end
  end
end
