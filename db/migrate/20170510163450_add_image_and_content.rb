class AddImageAndContent < ActiveRecord::Migration[5.0]
  def change
    add_column :productors, :image, :string
    add_column :productors, :content, :text
    add_column :services, :image, :string
    add_column :services, :content, :text
  end
end
