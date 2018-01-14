Rails.application.routes.draw do
  root to: "jobs#index"

  devise_for :users,
    path: "/",
    path_names: {
      # edit: "account/profile",
      sign_in:  "sign-in",
      sign_out: "sign-out",
    },
    controllers: {
      registrations: "users/registrations",
    }

  get "employer/sign-up", to: "employer/sign_up#new"
  get "sign-up", to: "sign_up#new"

  namespace :employer do
    root to: "jobs#index"

    resources :jobs
  end
end
