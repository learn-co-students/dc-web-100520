# Objectives

- Create and retrieve associated data
- Use the collection checkbox helper
- Use the collection select helper
- Build nested routes

# Questions

# Code challenge
- explain the request-response cycle starting and ending with the browser
    - including things like new/create or edit/update
- build a controller and view for a given route (including but not limited to CRUD)
    - be able to build a form and create a new resource
- set up database with migrations to match a given set of instructions
- validate that acceptable data is coming through

collection_select(
    :object, # field namespace (the thing we're building (:taco))
    :restaurant_id, # field we're filling in 
     # result of these two params will be: <select name="taco[restaurant_id]">...

    :collection Restaurant.all, 

    :value_method, #  method on a restaurant that returns what the computer will store (:id)
    :text_method, # this is name of method that displays the text to the user (:name)
