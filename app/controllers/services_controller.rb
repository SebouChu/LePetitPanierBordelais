class ServicesController < ApplicationController
  def index
    @restaurants = Service.where(typeserv: "res").order(created_at: :desc).limit(3)
    @marches = Service.where(typeserv: "mar").order(created_at: :desc).limit(3)
  end

  def restaurants
    @restaurants = Service.where(typeserv: "res")
  end

  def marches
    @marches = Service.where(typeserv: "mar")
  end

  def show
    @service = Service.find(params[:id])
  end
end
