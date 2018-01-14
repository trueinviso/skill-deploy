Rails.application.routes.draw do
  root to: "jobs#show"

  devise_for :users,
    path: "/",
    path_names: {
      # edit: "account/profile",
      sign_in:  "sign-in",
      sign_out: "sign-out",
      sign_up:  "sign-up",
    },
    controllers: {
      registrations: "users/registrations",
    }
end
