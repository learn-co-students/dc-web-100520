require 'test_helper'

class PostsControllerTest < ActionDispatch::IntegrationTest
    setup do
        # @post = Post.create(title: "test", cover_url: "n/a")
        @post = posts(:one)
        # binding.pry
        # byebug
        puts @post
    end

    test "display post heading on homepage" do
        get "/posts"
        assert_select 'h1', 'Posts'    
    end

    test "index post page" do
        get "/posts"
        assert_response :success
    end

    test "should create post" do
        assert_difference('Post.count') do 
            post "/posts", params: {post: { title: "test", cover_url: "none"}}
        end

        # assert_redirected_to post_path(Post.last)
        # assert_redirected_to post_url(Post.last)
        assert_redirected_to "/posts/#{Post.last.id}"
    end

    test "Post show page" do
        # post = Post.create(title: "test", cover_url: "n/a")
        get "/posts/#{@post.id}"

        # get "/posts/#{Post.last.id}"
        assert_response :success
    end

    test "user is able to update the post" do
        # post = Post.create(title: "test", cover_url: "n/a")
        patch post_url(@post), params: {post: { title: "test", cover_url: "none"}}

        # updatePost = Post.find(post.id)

        assert_redirected_to "/posts/#{@post.id}"
    end
  
end

