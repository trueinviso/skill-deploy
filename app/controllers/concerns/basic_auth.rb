module BasicAuth
  extend ActiveSupport::Concern

  included do
    if ENV["USE_BASIC_AUTH"].present?
      http_basic_authenticate_with(
        name: "bucky",
        password: "supersecretpassword!",
      )
    end
  end
end
