Rails.application.routes.draw do
  root to: "jobs#index"
  mount Unity::Engine, at: "/"

  devise_for :users,
    path: "/",
    path_names: {
      # edit: "account/profile",
      sign_in:  "sign-in",
      sign_out: "sign-out",
    },
    controllers: {
      registrations: "users/registrations",
      sessions: "users/sessions",
    }

  devise_scope :user do
    get "employer/registrations/edit" => "users/registrations#edit"
  end

  get "sign-up", to: "sign_up#new"

  namespace :profile do
    resource :social,
      only: [:edit, :update]

    resource :notifications,
      only: [:edit, :update]
  end

  resource :user_profile,
    only: [:edit, :update]

  resource :thumbnail,
    only: [:update, :destroy]

  resources :jobs,
    only: [:index]

  resources :favorite_jobs,
    only: [:index, :create]

  namespace :employer do
    root to: "jobs#index"

    resources :jobs
    resource :profile,
      only: [:edit, :update]
  end

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :jobs, only: [:index]
    end
  end
end
