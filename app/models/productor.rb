class Productor < ApplicationRecord
  def typeprod_enum
    [
      %w(Apiculteur api), %w(Éleveur ele), %w(Horticulteur hor), %w(Maraîcher mar), %w(Viticulteur vit)
    ]
  end
end
