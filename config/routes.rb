Rails.application.routes.draw do
  resources :clips

  root to: 'clips#new'
end
