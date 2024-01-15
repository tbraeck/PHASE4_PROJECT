class DrawingsController < ApplicationController
  skip_before_action :authorize

  def create
    drawing = @current_user.drawings.create!(drawing_params)
    render json: drawing, status: :created
  end

  def update
    drawing = @current_user.user_drawings.find_by(id: params[:id])
    if drawing
      drawing.update!(drawing_params)
      render json: drawing, status: :ok
    else
      render json: { error: 'Drawing not found or unauthorized' }, status: :not_found
    end
  end

  def index
    drawings = Drawing.all
    render json: drawings, status: :ok
  end

  def show
    drawing = find_drawing
    render json: drawing, status: :ok
  end

  def destroy
    drawing = @current_user.user_drawings.find_by(id: params[:id])
    if drawing
      drawing.destroy
      head :no_content
    else
      render json: { error: 'Drawing not found or unauthorized' }, status: :not_found
    end
  end

  private

  def find_drawing
    Drawing.find(params[:id])
end

  def drawing_params
      params.permit(:adjective, :noun, :verb, :adverb, :user_id, :category_id)
    end

end
