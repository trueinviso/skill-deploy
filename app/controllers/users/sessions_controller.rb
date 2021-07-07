module Users
  class SessionsController < Devise::SessionsController
    before_action :sync_subscription, only: [:create]
    # GET /resource/sign_in

    def new
      @login_path = true
      super
    end

    private

    def sync_subscription
      SubscriptionSyncerWorker.perform_async(current_user&.subscription&.id)
    end
  end
end
