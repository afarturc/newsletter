require "test_helper"

class SpecialitiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @speciality = specialities(:one)
  end

  test "should get index" do
    get specialities_url, as: :json
    assert_response :success
  end

  test "should create speciality" do
    assert_difference("Speciality.count") do
      post specialities_url, params: { speciality: { menu_id: @speciality.menu_id, name: @speciality.name } }, as: :json
    end

    assert_response :created
  end

  test "should show speciality" do
    get speciality_url(@speciality), as: :json
    assert_response :success
  end

  test "should update speciality" do
    patch speciality_url(@speciality), params: { speciality: { menu_id: @speciality.menu_id, name: @speciality.name } }, as: :json
    assert_response :success
  end

  test "should destroy speciality" do
    assert_difference("Speciality.count", -1) do
      delete speciality_url(@speciality), as: :json
    end

    assert_response :no_content
  end
end
