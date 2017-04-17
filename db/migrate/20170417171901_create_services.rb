class CreateServices < ActiveRecord::Migration[5.0]
  def change
    create_table :services do |t|
      t.string :typeserv
      t.string :name
      t.text :address

      t.timestamps
    end
  end
end
