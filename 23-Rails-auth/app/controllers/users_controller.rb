class UsersController < ApplicationController

    skip_before_action :logged_in?, only: [:new, :create]

    def new
        # to display signup form
    end

    def create
        # byebug
        @user = User.new(user_params)

        # if @user.valid?
        if @user.save
            # @user.save
            redirect_to @user
        else
            redirect_to "/signup"
            # render :new
        end

    end

    def show
        @user = User.find(session[:user_id])
        # @user = User.find(params[:id])
    end

    private
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
