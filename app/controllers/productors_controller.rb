class ProductorsController < ApplicationController
  def index
    @apiculteurs = Productor.where(typeprod: "api").order(created_at: :desc).limit(3)
    @eleveurs = Productor.where(typeprod: "ele").order(created_at: :desc).limit(3)
    @horticulteurs = Productor.where(typeprod: "hor").order(created_at: :desc).limit(3)
    @maraichers = Productor.where(typeprod: "mar").order(created_at: :desc).limit(3)
    @viticulteurs = Productor.where(typeprod: "vit").order(created_at: :desc).limit(3)
  end

  def apiculteurs
    @apiculteurs = Productor.where(typeprod: "api")
  end

  def eleveurs
    @eleveurs = Productor.where(typeprod: "ele")
  end

  def horticulteurs
    @horticulteurs = Productor.where(typeprod: "hor")
  end

  def maraichers
    @maraichers = Productor.where(typeprod: "mar")
  end

  def viticulteurs
    @viticulteurs = Productor.where(typeprod: "vit")
  end

  def show
    @productor = Productor.find(params[:id])
  end
end
