class UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user
      # redirect to todos view? 
    else
      render :new
    end
  end

  def new
    @user = User.new
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
