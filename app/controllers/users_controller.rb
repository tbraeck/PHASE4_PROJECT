class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :show]

  def index 
    users = User.all
    render json: users
  end

  def show
    @current_user = User.find(params[:id])
    render json: @current_user
  end

  private

  def user_params
    params.permit(:username, :password)
  end
end
