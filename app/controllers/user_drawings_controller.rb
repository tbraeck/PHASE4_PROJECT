class UserDrawingsController < ApplicationController
    before_action :set_user
    before_action :set_user_drawing, only: [:show, :update, :destroy]
    skip_before_action :authorize

    # GET /users/:user_id/user_drawings
    def index
      @user_drawings = @current_user.user_drawings
      render json: @user_drawings
    end
    
    # GET /users/:user_id/user_drawings/:id
    def show
      render json: @user_drawing
    end
    
    # POST /users/:user_id/user_drawings
   # POST /users/:user_id/user_drawings
def create
  @user_drawing = @current_user.user_drawings.new(user_drawing_params)
  if @user_drawing.save
    render json: @user_drawing, status: :created
  else
    render json: @user_drawing.errors, status: :unprocessable_entity
  end
end

    #   def create
    #     drawing = @current_user.user_drawings.create!(user_drawing_params)
    #     render json: drawing, status: :created
    # end
    # end

    # def update
    #   drawing = @current_user.drawings.find(user_drawing_params)
    #   drawing.update!(drawing_params)
    #   render json: drawing, status: :ok
    # end
 def update 
      @user_drawing = @current_user.user_drawings.find(params[:id])
      @user_drawing.update!(user_drawing_params)
      render json: @user_drawing
  end

  def destroy  
   @user_drawing.destroy
    head :no_content
end
  
    # def destroy
    #   drawing = @current_user.drawings.find(params[:id])
    #   drawing.destroy
    #   head :no_content
    # end
    
    # PATCH/PUT /users/:user_id/user_drawings/:id
    # def update
    #   if @user_drawing.update(user_drawing_params)
    #     render json: @user_drawing
    #   else
    #     render json: @user_drawing.errors, status: :unprocessable_entity
    #   end
    # end
    
    # # DELETE /users/:user_id/user_drawings/:id
    # def destroy
    #   @user_drawing.destroy
    #   head :no_content
    # end
    
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



  
    