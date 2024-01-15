class UsersController < ApplicationController
<<<<<<< HEAD
  skip_before_action :authorize, only: [:create]
=======
  skip_before_action :authorize, only: [:create, :show]
>>>>>>> new-name/Tate-Main

  def index 
    users = User.all
    render json: users
  end

<<<<<<< HEAD
  def create
    user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
  end

=======
>>>>>>> new-name/Tate-Main
  def show
    @current_user = User.find(params[:id])
    render json: @current_user
  end

  private

  def user_params
    params.permit(:username, :password)
  end
end
