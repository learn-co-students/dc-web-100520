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
    @restaurant = Restaurant.new(restaurant_params)
    # if the taco is good
    if @restaurant.valid?
      # save it to database
      # redirect to show page
      @restaurant.save
      redirect_to restaurant_path(@restaurant)
    else
      render :new
    # if not
      # rerender the form
      # show the errors to the user
    end

  end

  def restaurant_params
    params.require(:restaurant).permit(:name, :city, 
      :taco_ids => [])
  end
end
