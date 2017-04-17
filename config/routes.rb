Rails.application.routes.draw do
  # Admin
  devise_for :admins
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  # Static Pages
  root 'statics#index'
  get '/about' => 'statics#about'
  get '/contact' => 'statics#contact'

  # Productors
  get '/producteurs' => 'productors#index', as: :productors
  get '/producteurs/apiculteurs' => 'productors#apiculteurs', as: :apiculteurs
  get '/producteurs/eleveurs' => 'productors#eleveurs', as: :eleveurs
  get '/producteurs/horticulteurs' => 'productors#horticulteurs', as: :horticulteurs
  get '/producteurs/maraichers' => 'productors#maraichers', as: :maraichers
  get '/producteurs/viticulteurs' => 'productors#viticulteurs', as: :viticulteurs
  get '/producteurs/:id' => 'productors#show', as: :productor

  # Services
  get '/services' => 'services#index', as: :services
  get '/services/restaurants' => 'services#restaurants', as: :restaurants
  get '/services/marches' => 'services#marches', as: :marches
  get '/services/:id' => 'services#show', as: :service
end
