class UsersController < ApplicationController
  skip_before_action :authorize

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  
  def create
    user = User.create!(user_params)

    if user.save
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
  def show
    render json: @current_user
  end

  private

  def user_params
    params.permit(:username, :password)
  end
end
