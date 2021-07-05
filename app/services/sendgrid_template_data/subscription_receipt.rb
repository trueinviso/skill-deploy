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
        subscription_name: subscription_presenter.subscription_name,
        price: subscription_presenter.price,
        renew_date: subscription_presenter.renew_date,
        purchase_date: subscription_presenter.purchase_date,
        amount_paid: subscription_presenter.amount_paid,
        login_url:  new_user_session_path,
      }
    end

    def subscription_presenter
      subscription_presenter ||= Presenters::Subscription.new(result)
    end
  end
end
