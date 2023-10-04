class UserDrawingsController < ApplicationController
    before_action :set_user
    before_action :set_user_drawing, only: [:show, :create, :update, :destroy]
    skip_before_action :authorize

    def index
      user_drawings = @current_user.user_drawings
      render json: user_drawings
    end
    
    def show
      render json: @user_drawing
    end
    

    def create
      @user_drawing = @current_user.user_drawings.create!(user_drawing_params)
      if @user_drawing.save
        render json: @user_drawing, status: :created
      else
        render json: { errors: @user_drawing.errors.full_messages }, status: :unprocessable_entity
      end
    end
    
    
    def update
      @user_drawing = set_user_drawing
      if @user_drawing.update!(user_drawing_params)
        render json: @user_drawing, status: :ok
      else
        render json: { errors: @user_drawing.errors.full_messages }, status: :unprocessable_entity
      end
    end
     
    def destroy
      @user_drawing = set_user_drawing
      if @user_drawing
        @user_drawing.destroy
        head :no_content
      else
        render json: { error: 'User drawing not found' }, status: :not_found
      end
    end
    
    private
    
    def set_user
      @current_user = User.find(params[:user_id])
    end
   
    def set_user_drawing
      @user_drawing = @current_user.user_drawings.find_by(id: params[:id])
    end
    
    def user_drawing_params
      params.permit(:adjective, :noun, :verb, :adverb)
    end
  end