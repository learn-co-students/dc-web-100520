Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/signup", to: "users#new"
  post "/signup", to: "users#create"
  # get "/users/:id", to: "users#show"
  resources :users, only: [:show]

  get "/login", to: "logins#new"
  post "/login", to: "logins#create", as: "logIn"
  delete "/logout", to: "logins#destroy"

end
