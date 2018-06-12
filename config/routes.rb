Rails.application.routes.draw do
  get 'animals/rats'
  get 'animals/roaches'
  get 'animals/flys'
  # get 'boroughs/manhatten' to 'manhatten' 
  get 'boroughs/manhatten', to: "boroughs#manhatten", as: "manhatten"
  get 'boroughs/queens'
  get 'boroughs/bronx'
  get 'boroughs/brooklyn'
  get 'boroughs/statenisland'
  get 'rating/index'
  get 'main_page/index'
  get 'bronx/index'

  root 'home#index'
  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
