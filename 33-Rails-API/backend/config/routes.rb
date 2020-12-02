Rails.application.routes.draw do
  get '/hobbies', to: 'hobbies#custom_index'
   get '/cats', to: 'cats#index'
   get '/cats/:id', to: 'cats#show'
   post '/cats', to: 'cats#create'
   delete '/cats/:id', to: 'cats#destroy'
   patch '/cats/:id', to: 'cats#update'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
