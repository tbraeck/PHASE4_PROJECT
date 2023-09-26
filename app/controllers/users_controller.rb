class UsersController < ApplicationController
  skip_before_action :authorize

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end
  
  def show
    @current_user = find_current_user
    render json: @current_user
  end

  private


  def find_current_user
    User.find(params[:id])
end

  def user_params
    params.permit(:username, :password)
  end
end
