Rails.application.routes.draw do
  get 'rating/index'
  get 'main_page/index'
  root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
