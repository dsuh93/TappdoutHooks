class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  def create
    @user = User.new(user_params(users_columns)) # users_columns is from ApplicationController
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update(user_params(users_columns))
      render :show 
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = User.find_by(id: params[:id])
    if @user && @user.destroy
      render :show
    end
  end

  def user_params(user_columns)
    params.require(:user).permit(:password, *users_columns)
  end
end
