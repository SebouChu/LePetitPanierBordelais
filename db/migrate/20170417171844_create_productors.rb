class CreateProductors < ActiveRecord::Migration[5.0]
  def change
    create_table :productors do |t|
      t.string :typeprod
      t.string :name
      t.text :products
      t.string :wineapp
      t.text :onsite
      t.text :market
      t.text :amap
      t.text :other

      t.timestamps
    end
  end
end
