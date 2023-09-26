class UserDrawingsController < ApplicationController
    before_action :set_user
    before_action :set_user_drawing, only: [:show, :update, :destroy]
    skip_before_action :authorize

    # GET /users/:user_id/user_drawings
    def index
      @user_drawings = @user.user_drawings
      render json: @user_drawings
    end
    
    # GET /users/:user_id/user_drawings/:id
    def show
      render json: @user_drawing
    end
    
    # POST /users/:user_id/user_drawings
    def create
      @user_drawing = @user.user_drawings.create!(user_drawing_params)
      if @user_drawing.save
        render json: @user_drawing, status: :created
      else
        render json: @user_drawing.errors, status: :unprocessable_entity
      end
    end

    
    
    # PATCH/PUT /users/:user_id/user_drawings/:id
    def update
      if @user_drawing.update(user_drawing_params)
        render json: @user_drawing
      else
        render json: @user_drawing.errors, status: :unprocessable_entity
      end
    end
    
    # DELETE /users/:user_id/user_drawings/:id
    def destroy
      @user_drawing.destroy
      head :no_content
    end
    
    private
    
    def set_user
      @user = User.find(params[:user_id])
    end
    
    
    def set_user_drawing
      @user_drawing = @user.user_drawings.find(params[:id])
    end
    
    def user_drawing_params
      params.require(:user_drawing).permit(:adjective, :noun, :verb, :adverb)
    end
  end