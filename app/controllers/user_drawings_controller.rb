class UserDrawingsController < ApplicationController
    before_action :set_user
    before_action :set_user_drawing, only: [:show, :update, :destroy]
    skip_before_action :authorize

    def index
      @user_drawings = @current_user.user_drawings
      render json: @user_drawings
    end
  
    def show
      render json: @user_drawing
    end
    
  
    def create
      @user_drawing = @current_user.user_drawings.new(user_drawing_params)
      if @user_drawing.save
        render json: @user_drawing, status: :created
      else
        render json: @user_drawing.errors, status: :unprocessable_entity
      end
    end

      def update 
            @user_drawing = @current_user.user_drawings.find(params[:id])
            @user_drawing.update!(user_drawing_params)
            render json: @user_drawing
        end

      def destroy  
      @user_drawing.destroy
        head :no_content
      end
    
    private
    
    def set_user
      @current_user = User.find_by(id: params[:user_id])
      
      unless @current_user
        render json: { error: "User not found" }, status: :not_found
        return
      end
    end
    
    def set_user_drawing
      @user_drawing = @current_user.user_drawings.find(params[:id])
      unless @user_drawing
        render json: { error: "User drawing not found" }, status: :not_found
        return
      end
    end
    
    def user_drawing_params
      params.permit(:adjective, :noun, :verb, :adverb)
    end
  end



  
    