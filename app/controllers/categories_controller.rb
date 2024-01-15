class CategoriesController < ApplicationController
skip_before_action :authorize

<<<<<<< HEAD
=======

>>>>>>> new-name/Tate-Main
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

  def category_drawings
    # look through all categories/ find/ filter/ select
    # each individual category filter/ select based on params/ requirements
    # length/ length[1, 2, 3, 4, 5 ].length   
    # look through all categories that have n value of drawings or more
    # render json: value, 
    # [1,2,3,4,5].select {|num| num.even? }
    cat_drawings = Category.all.select {|cat| cat.drawings.length >= params[:n].to_i}
    render json: cat_drawings
    
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
