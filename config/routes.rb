Rails.application.routes.draw do
  resources :clips, only: [:new, :create, :edit, :update, :show]

  root to: 'clips#new'
end
