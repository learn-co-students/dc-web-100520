class RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end

  def new
    # load the blank form
    @restaurant = Restaurant.new
  end

  def create
    # process the form
    r = Restaurant.create(restaurant_params)
    # taco_ids = params[:restaurant][:taco_ids]
    # taco_ids.each do |taco_id|
    #   taco = Taco.find(taco_id)
    #   taco.restaurant = r 
    #   taco.save
    # end
    redirect_to restaurant_path(r)
  end
  # def whatever
  # end

  def restaurant_params
    params.require(:restaurant).permit(:name, :city, 
      :taco_ids => [])
  end
end
