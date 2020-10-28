class ApplicationController < ActionController::Base


    def home
    end

    def hello
        @name = params[:name]
        render "hello"
    end

    def adding
        @first_number = params[:x].to_i
        @second_number = params[:y].to_i
        @sum = @first_number + @second_number
        render "sum"
    end

    def about

    end


end
