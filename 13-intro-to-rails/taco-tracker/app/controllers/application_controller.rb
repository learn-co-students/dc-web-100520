class ApplicationController < ActionController::Base


    def home
        puts "\n\nwe have hit our home action\n\n"
        
        # render "home"
    end

    def hello
        @cohort_name = "Ruby Dooby Doo"
        render "hello"
    end
end
