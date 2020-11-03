Rails.application.routes.draw do
 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :tacos
  resources :restaurants, only: [:index, :show, :new, :create]

  get "/", to: "application#home"
  get "/hi/:name", to: "application#hello", as: "hello"
  get "/addition/:x/:y", to: "application#adding", as: "adding"
  get "/about_yummy_foods", to: "application#about", as: "about_tacos"

  # get "/tacos", to: "tacos#index", as: "tacos"
  # get "/tacos/new", to: "tacos#new", as: "new_taco"
  # get "/tacos/:id", to: "tacos#show", as: "taco"
  # post "/tacos", to: "tacos#create", as: "tacos"
  get "/show_the_taco_form", to: "tacos#petey_is_great"
  get "/print_to_terminal", to: "tacos#rubydooby"
  get "/hi_all", {to: "application#greetings", as: "greetings"}
  patch "/i_love_meat/:id", to: "tacos#meat_is_great", as: "add_meat"
  # get "i_hate_tacos/:id" => "tacos#remove_a_taco", as: "kill_taco"
  
end
