Rails.application.routes.draw do
  resources :clips, only: [:new, :create, :edit]

  root to: 'clips#new'
end
