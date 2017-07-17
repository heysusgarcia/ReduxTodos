class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user.nil?
      render :new
    else
      session[:user_id] = @user.id
      # sign in
    end
  end

  def destroy
  end

  def new
  end
end
