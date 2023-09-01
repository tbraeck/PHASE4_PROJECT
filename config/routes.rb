Rails.application.routes.draw do
 
  resources :categories, only: [:index, :show]
  resources :drawings, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:show]
  resources :users do
    resources :user_drawings
  end

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

get "/users/:user_id/drawings", to: "user_drawings#index"
post "/users/:user_id/drawings", to: "user_drawings#create"
delete "users/:user_id/drawings/:drawing_id", to: "user_drawings#destroy"
patch "/users/:user_id/drawings/:drawing_id", to: "user_drawings#update"

  # get  "/login", to: "sessions#new"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end
