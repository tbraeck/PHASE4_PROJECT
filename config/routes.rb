Rails.application.routes.draw do
 
  resources :categories, only: [:index, :show]
  resources :drawings, only: [:index, :show, :create, :update, :destroy]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  # get  "/login", to: "sessions#new"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end
