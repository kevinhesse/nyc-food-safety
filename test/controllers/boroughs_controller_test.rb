require 'test_helper'

class BoroughsControllerTest < ActionDispatch::IntegrationTest
  test "should get manhatten" do
    get boroughs_manhatten_url
    assert_response :success
  end

  test "should get queens" do
    get boroughs_queens_url
    assert_response :success
  end

  test "should get bronx" do
    get boroughs_bronx_url
    assert_response :success
  end

  test "should get brooklyn" do
    get boroughs_brooklyn_url
    assert_response :success
  end

  test "should get staten-island" do
    get boroughs_staten-island_url
    assert_response :success
  end

end
