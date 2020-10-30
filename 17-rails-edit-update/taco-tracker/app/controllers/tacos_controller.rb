class TacosController < ApplicationController

    def index 
        if params[:veggie] == "true"
            @page_title = "Vegetarian Tacos"
            @tacos = Taco.veggie
        elsif params[:veggie] == "false"
            @page_title = "Meat Tacos"
            @tacos = Taco.meat
        else
            @page_title = "Taco Index Page"
            @tacos = Taco.all
        end
        # render :index
    end

    def show 
        taco_id = params[:id]

        @taco = Taco.find(taco_id)
    end

    def new
        render :new
    end

    def create
        new_taco_name = params[:name]
        new_taco_price = params[:price]
        new_taco_vegetarian = params[:vegetarian]
        new_taco = Taco.create(name: new_taco_name,
                               price: new_taco_price,
                               vegetarian: new_taco_vegetarian)
        redirect_to taco_path(new_taco.id)

    end
    
    def rubydooby
        puts "\n\n\n\nHello Ruby Dooby Doo\n\n\n\n"
        return nil
    end

    # def veggie
    #     @page_title = "Vegetarian Tacos"
    #     @tacos = Taco.veggie
    #     render "index"

    # end
end
