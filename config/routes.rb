Rails.application.routes.draw do
  root to: "jobs#index"

  mount Unity::Engine => "/"

  devise_for :users,
    path: "/",
    path_names: {
      # edit: "account/profile",
      sign_in:  "sign-in",
      sign_out: "sign-out",
    },
    controllers: {
      omniauth_callbacks: "users/omniauth_callbacks",
      registrations: "users/registrations",
      sessions: "users/sessions",
    }

  devise_scope :user do
    get "employer/registrations/edit" => "users/registrations#edit"
  end

  get "sign-up", to: "sign_up#new"

  resource :join_us, only: :show, path: "join-us"

  namespace :profile do
    resource :social,
      only: [:edit, :update]

    resource :notifications,
      only: [:edit, :update]

    resource :pending_review,
      only: [:show]
  end

  resource :profile,
    except: [:destroy]

  resources :jobs,
    only: [:index, :show]

  resources :favorite_jobs,
    only: [:index]

  resources :applied_fors,
    only: [:index]

  namespace :employer do
    root to: "jobs#index"

    resources :jobs
    resource :profile,
      only: [:edit, :update]
    resource :billing,
      controller: :billing,
      only: [:edit, :update, :destroy]

    namespace :preview do
      resources :job,
        controller: :jobs,
        only: [:show]
    end
  end

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :jobs,
        only: [:index]
      resources :favorite_jobs,
        only: [:index, :create, :destroy]
      resource :apply,
        controller: :apply,
        only: [:create]
      resources :user,
        controller: :user,
        only: [:index]
      resource :thumbnail,
        only: [:update]
      resources :job_filters,
        controller: :job_filters,
        only: [:index]
    end
  end
end
