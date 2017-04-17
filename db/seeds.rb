# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

productors = JSON.parse(File.read('db/json/productors.json'))
productors.each do |productor|
  Productor.create!(productor)
end

services = JSON.parse(File.read('db/json/services.json'))
services.each do |service|
  Service.create!(service)
end
