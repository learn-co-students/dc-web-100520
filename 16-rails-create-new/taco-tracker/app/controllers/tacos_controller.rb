class TacosController < ApplicationController

    def index 
        @tacos = Taco.all
        # render :index
    end

    def show 
        taco_id = params[:id]
        @taco = Taco.find(taco_id)
    end
end
