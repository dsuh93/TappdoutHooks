class Api::SessionsController < ApplicationController

  before_action :ensure_logged_in, only: [:destroy]

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ["Invalid username or password"], status: 404
    end
  end

  def destroy
    logout!
    render json: { message: 'Logout successful.' }
  end
end
