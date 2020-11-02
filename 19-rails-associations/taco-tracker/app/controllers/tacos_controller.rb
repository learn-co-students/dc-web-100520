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
        #using a form_for
        @taco = Taco.new # don't save
        render :new 
    end

    def petey_is_great
        # using a form_tag
        render :hi_anne
    end

    def meat_is_great
        @taco = Taco.find(params[:id])
        @taco.vegetarian = !@taco.vegetarian
        @taco.save 
        redirect_to taco_path(@taco)
    end

    def create
        byebug
        new_taco = Taco.create(taco_params)
        redirect_to taco_path(new_taco.id)

    end
    
    def edit
        @taco = Taco.find(params[:id])
        render :edit
    end

    def update
        @taco = Taco.find(params[:id])
        @taco.update(taco_params)
        redirect_to taco_path(@taco.id)  # www.tacotracker.com/tacos/49 (show page)
        # redirect_to "http://www.google.com"
    end

    def rubydooby
        puts "\n\n\n\nHello Ruby Dooby Doo\n\n\n\n"
        return nil
    end

    def destroy
        dead_taco = Taco.find(params[:id])
        dead_taco.delete
        redirect_to tacos_path
    end

    private

    def taco_params
        params.require(:taco).permit(:name, :price, :vegetarian)
    end

end
