class UserDrawingsController < ApplicationController
    before_action :set_user
    before_action :set_user_drawing, only: [:show, :create, :update, :destroy]
    skip_before_action :authorize

    def index
<<<<<<< HEAD
      user_drawings = @current_user.user_drawings
      render json: user_drawings
    end
    
=======
      @user_drawings = @current_user.user_drawings
      render json: @user_drawings
    end
  
>>>>>>> new-name/Tate-Main
    def show
      render json: @user_drawing
    end
    
<<<<<<< HEAD

    def create
      @user_drawing = @current_user.user_drawings.create!(user_drawing_params)
        render json: @user_drawing, status: :created
     
    end
    
    
    def update
      @user_drawing = set_user_drawing
      @user_drawing.update!(user_drawing_params)
      render json: @user_drawing, status: :ok
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
=======
  
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
>>>>>>> new-name/Tate-Main
    
    private
    
    def set_user
<<<<<<< HEAD
      @current_user = User.find(params[:user_id])
    end
   
    def set_user_drawing
      @user_drawing = @current_user.user_drawings.find_by(id: params[:id])
=======
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
>>>>>>> new-name/Tate-Main
    end
    
    def user_drawing_params
      params.permit(:adjective, :noun, :verb, :adverb)
    end
  end



  
    