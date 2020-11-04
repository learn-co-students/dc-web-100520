Rails.application.routes.draw do
  resources :planets
  resources :scientists
  resources :missions, only: [:new, :create]
  
  get "/deleted", to: "scientists#scientist_gone", as: "deleted_scientist"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
