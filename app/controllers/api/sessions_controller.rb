class Api::SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:username],
      params[:password]
    )
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def destroy
    logout!
    render json: { message: 'Logout successful.' }
  end
end
