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


# class JobsController < ApplicationController
#   skip_before_action :authorize, only: [:create, :index]
#   def create
#       new_job = Job.create!(job_params)
#       render json: new_job, status: :created
#   end
  
#   def index
#       jobs = Job.all
#       render json: jobs
#   end

#   private
#   def job_params
#       params.permit(:description,:pay,:location,:position,:company,:about_the_job)
#   end
# end