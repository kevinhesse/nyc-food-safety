Rails.application.routes.draw do
  get 'boroughs/manhatten'
  get 'boroughs/queens'
  get 'boroughs/bronx'
  get 'boroughs/brooklyn'
  get 'boroughs/staten-island'
  get 'rating/index'
  get 'main_page/index'
  get 'bronx/index'
  root 'home#index'
  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
