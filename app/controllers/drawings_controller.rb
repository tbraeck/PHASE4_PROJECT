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
    drawing = Drawing.create!(drawing_params)
    render json: drawing, status: :created
  end

  def update
    drawing = find_drawing
    drawing.update!(drawing_params)
    render json: drawing, status: :ok
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
      params.permit(:adjective, :noun, :verb, :adverb, :user_id, :category_id)
    end
end
