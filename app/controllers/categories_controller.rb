class CategoriesController < ApplicationController
skip_before_action :authorize
  def index
    categories = Category.includes(:drawings).all
    render json: categories, status: :ok
  end

  def show
    category = find_category
    render json: category
  end

  def create
    category = Category.create!(category_params)
    category.update!(category_params)
    render json: category, status: :created
  end

  def update
    category = find_category
    category.update!(category_params)
    render json: category, status: :ok
  end

  private
   
  def find_category
      Category.find(params[:id])
  end

    def category_params
      params.permit(:name, :description)
    end
end
