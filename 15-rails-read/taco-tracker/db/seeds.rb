# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars psh' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Taco.destroy_all

20.times do 
    Taco.create(name: "#{Faker::Hipster.word.titlecase} Taco", price: rand(1.0..10.0).round(2), vegetarian: [true, false].sample)

end