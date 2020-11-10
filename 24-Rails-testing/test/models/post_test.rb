require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "Should not save a post without title" do
    post = Post.new
    post.cover_url = "https://www.digitalvidya.com/wp-content/uploads/2019/03/personal-blog.jpg"
    assert_not post.save, "Saved post without the title"
  end


end
