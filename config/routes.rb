Rails.application.routes.draw do
  get 'animals/rats'
  get 'animals/roaches'
  get 'animals/flys'
  # get 'boroughs/manhatten' to 'manhatten' 
  get 'boroughs/manhatten', to: "boroughs#manhatten", as: "manhatten"
  get 'boroughs/queens', to: "boroughs#queens", as: "queens"
  get 'boroughs/bronx', to: "boroughs#bronx", as: "bronx"
  get 'boroughs/brooklyn', to: "boroughs#brooklyn", as: "brooklyn"
  get 'boroughs/statenisland', to: "boroughs#statenisland", as: "statenisland"
  get 'rating/index'
  get 'main_page/index'
  get 'bronx/index'
  get 'search/index', to: "search#index", as: "search"

  root 'home#index'
  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
