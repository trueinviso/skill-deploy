require "sidekiq/web"

Rails.application.routes.draw do
  root to: "jobs#index"

  mount Unity::Engine => "/"

  authenticate :user, ->(user) { user.admin? } do
    mount Sidekiq::Web => "/sidekiq"
  end

  devise_for :users,
    path: "/",
    path_names: {
      # edit: "account/profile",
      sign_in:
      "sign-in",
      sign_out:
      "sign-out",
    },
    controllers: {
      omniauth_callbacks: "users/omniauth_callbacks",
      registrations: "users/registrations",
      sessions: "users/sessions",
      passwords: "users/passwords",
    }

  devise_scope :user do
    get "employer/registrations/edit" => "users/registrations#edit"
  end

  get "sign-up", to: "sign_up#new"

  resources :confirmations, only: :index

  resource :join_us, only: [:show,:create], path: "join-us"

  namespace :profile do
    resource :notifications, only: [:edit, :update]
    resource :pending_review, only: [:show]
  end

  resource :user_profile,
    controller: :user_profiles,
    path: "profile",
    except: [:destroy]

  resources :jobs, only: [:index, :show]
  resources :favorite_jobs, only: [:index]
  resources :applied_fors, only: [:create]

  namespace :talent do
    resources :jobs, only: [] do
      resource :apply, only: %i[create]
    end
  end

  namespace :employer do
    root to: "jobs#index"

    resources :jobs
    resources :job_postings, only: [:update]
    resources :job_archives, only: [:update]
    resources :job_previews, only: [:update]
    resources :messages, only: [:create]
    resources :applicants, only: [:show]

    resources :user_profiles,
      only: [:show],
      path: "profile"

    namespace :preview do
      resources :job,
        controller: :jobs,
        only: [:show]
    end
  end

  namespace :admin do
    resources :user_profiles, only: [:update]
  end

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :jobs, only: [:index]
      resources :favorite_jobs, only: [:index, :create, :destroy]
      resource :apply,
        controller: :apply,
        only: [:create]

      resources :jobs, only: [] do
        resources :applicants, only: [:index]
      end
      resource :thumbnail, only: [:update]
    end
  end

  get :about,               to: "static#about"
  get :cancellation_policy, to: "static#cancellation_policy"
  get :faq,                 to: "static#faq"
  get :help,                to: "static#help"
  get :privacy,             to: "static#privacy"
  get :refund_policy,       to: "static#refund_policy"
  get :signup,              to: "static#signup"
  get :terms,               to: "static#terms_and_conditions"
end
