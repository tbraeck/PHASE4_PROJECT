require "test_helper"

class DrawingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @drawing = drawings(:one)
  end

  test "should get index" do
    get drawings_url, as: :json
    assert_response :success
  end

  test "should create drawing" do
    assert_difference("Drawing.count") do
      post drawings_url, params: { drawing: { adjective: @drawing.adjective, adverb: @drawing.adverb, category_id: @drawing.category_id, noun: @drawing.noun, user_id: @drawing.user_id, verb: @drawing.verb } }, as: :json
    end

    assert_response :created
  end

  test "should show drawing" do
    get drawing_url(@drawing), as: :json
    assert_response :success
  end

  test "should update drawing" do
    patch drawing_url(@drawing), params: { drawing: { adjective: @drawing.adjective, adverb: @drawing.adverb, category_id: @drawing.category_id, noun: @drawing.noun, user_id: @drawing.user_id, verb: @drawing.verb } }, as: :json
    assert_response :success
  end

  test "should destroy drawing" do
    assert_difference("Drawing.count", -1) do
      delete drawing_url(@drawing), as: :json
    end

    assert_response :no_content
  end
end
