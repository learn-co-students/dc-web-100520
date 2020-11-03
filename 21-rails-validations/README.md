# Objectives
    Part A:
        - Partials

    Part B:
        - Validations

# Questions
    - Custom validators
    - Collection_select
    - associating data in forms
    - building seed data, faker, etc
    - difference between a view and a layout
    - 


```rb
collection_select(
    :object, # field namespace (the thing we're building (:taco))
    :restaurant_id, # field we're filling in 
     # result of these two params will be: <select name="taco[restaurant_id]">...

    :collection Restaurant.all, 

    :value_method, #  method on a restaurant that returns what the computer will store (:id)
    :text_method, # this is name of method that displays the text to the user (:name)
```