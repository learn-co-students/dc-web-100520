restaurants = "select name, id from restaurants JOIN menu_items WHERE menu_item.restaurant_id = restaurant.id"


Restaurant.where(dishes.count > 20)