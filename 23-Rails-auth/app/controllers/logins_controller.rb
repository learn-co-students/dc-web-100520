class LoginsController < ApplicationController

    skip_before_action :logged_in?, only: [:new, :create]

    def new
        # to display login form
    end

    def create
        # byebug
        @user = User.find_by(username: params[:username])

        if @user && @user.authenticate(params[:password])
            session[:user_id] = @user.id
            # session[:role] = @user.role
            redirect_to @user #redirect to the show page
        else
            redirect_to '/login'
        end
    end

    def destroy
        session.delete(:user_id)
        redirect_to "/login"
    end

end
