class ApplicationController < ActionController::API
  before_action :authorize
<<<<<<< HEAD
    include ActionController::Cookies
  
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
=======
  include ActionController::Cookies
  
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response  
>>>>>>> new-name/Tate-Main
  
    private
  
    def authorize
      @current_user = User.find_by(id: session[:user_id])
      render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end

<<<<<<< HEAD
  def record_not_found_response
    render json: {errors: "model not found"}, status: :not_found
  end

=======
    def record_not_found_response
      render json: {errors: "model not found"}, status: :not_found
    end
  
>>>>>>> new-name/Tate-Main
    def render_unprocessable_entity_response(invalid)
      render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
  
  end


