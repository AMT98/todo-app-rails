Rails.application.routes.draw do
  resources :users, only: [:create, :show, :index]
  resources :tasks
  post "login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"
end
