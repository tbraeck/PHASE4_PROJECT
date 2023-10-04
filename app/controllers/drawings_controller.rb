class DrawingsController < ApplicationController
  skip_before_action :authorize

  def index
    drawings = Drawing.all
    render json: drawings, status: :ok
  end

  def show
    drawing = find_drawing
    render json: drawing, status: :ok
  end

  def create
    user = User.find(params[:user_id])
    if drawing = user.drawings.create!(drawing_params)
    render json: drawing, status: :created
    else 
      render json: { errors: drawing.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    drawing = find_drawing
  
    if drawing.update(drawing_params)
      render json: drawing, status: :ok
    else
      render json: { errors: drawing.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    drawing = find_drawing
    drawing.destroy
    head :no_content
  end

  private
   
  def find_drawing
      Drawing.find(params[:id])
  end

  def drawing_params
      params.require(:drawing).permit(:adjective, :noun, :verb, :adverb, :user_id, :category_id)
    end
end
