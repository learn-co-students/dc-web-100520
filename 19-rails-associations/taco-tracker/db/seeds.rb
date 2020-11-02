# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars psh' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Taco.destroy_all
Restaurant.destroy_all

5.times do 
    Restaurant.create(name: Faker::Restaurant.name,
                      city: Faker::Address.city_prefix + Faker::Address.city_suffix)
end

20.times do 
    Taco.create(name: "#{Faker::Hipster.word.titlecase} Taco",
                price: rand(1.0..10.0).round(2),
                vegetarian: [true, false].sample,
                restaurant: Restaurant.all.sample)
end