require 'test_helper'

class AnimalsControllerTest < ActionDispatch::IntegrationTest
  test "should get rats" do
    get animals_rats_url
    assert_response :success
  end

  test "should get roaches" do
    get animals_roaches_url
    assert_response :success
  end

  test "should get flys" do
    get animals_flys_url
    assert_response :success
  end

end
