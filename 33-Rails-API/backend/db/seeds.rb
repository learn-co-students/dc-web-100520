
Cat.create(name: "Monkey", breed: "American Shorthair", gender: "male", fluffiness: "3", image: "https://images.ctfassets.net/440y9b545yd9/250mPrOBEUesyo1imn2SmZ/9c6104c32076f06803834df2aafffe77/American-Shorthair850.jpg")
Cat.create(name: "Mr.ChooChoo", breed: "Mainecoon", gender: "female", fluffiness: "8", image: "https://geekologie.com/2019/08/28/crazy-maine-coon-cat.jpg")
Cat.create(name: "Pleebo", breed: "American Shorthair", gender: "male", fluffiness: "3", image: "https://images.ctfassets.net/440y9b545yd9/1SqWeVwcBWUyCDj6nfgjMw/691943b4f3e167438ed52853c7d59adc/202silvershorthair.jpg")
Cat.create(name: "LilPoops", breed: "Hairless", gender: "non-binary", fluffiness: "10", image: "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555382975/shape/mentalfloss/sphinxhed.png")
Cat.create(name: "Cassandra", breed: "Scottish Fold", gender: "non-binary", fluffiness: "3", image: "https://www.petassure.com/petassure/file-streams/page/gyyyeLBsy9JBzjL7K01SFQ0rare-cat-breed-the-scottish-fold.jpg.jpg")

Hobby.create(name: "Sleeping")
Hobby.create(name: "Judging")
Hobby.create(name: "Chaos")
Hobby.create(name: "Destroying Homes")
Hobby.create(name: "Eating")
Hobby.create(name: "Climbing")

CatHobby.create(cat_id: Cat.all.sample.id, hobby_id: Hobby.all.sample.id)
CatHobby.create(cat_id: Cat.all.sample.id, hobby_id: Hobby.all.sample.id)
CatHobby.create(cat_id: Cat.all.sample.id, hobby_id: Hobby.all.sample.id)
CatHobby.create(cat_id: Cat.all.sample.id, hobby_id: Hobby.all.sample.id)
CatHobby.create(cat_id: Cat.all.sample.id, hobby_id: Hobby.all.sample.id)
CatHobby.create(cat_id: Cat.all.sample.id, hobby_id: Hobby.all.sample.id)
CatHobby.create(cat_id: Cat.all.sample.id, hobby_id: Hobby.all.sample.id)
CatHobby.create(cat_id: Cat.all.sample.id, hobby_id: Hobby.all.sample.id)
CatHobby.create(cat_id: Cat.all.sample.id, hobby_id: Hobby.all.sample.id)
