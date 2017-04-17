class Service < ApplicationRecord
  def typeprod_enum
    [
      %w(Restaurant res), %w(Marché mar)
    ]
  end
end
