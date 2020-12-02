class HobbiesController < ApplicationController
    def custom_index
        render json: Hobby.all
    end
end
