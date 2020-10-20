require 'rest-client'
require 'json'
require 'pry'

GOOGLE_BOOKS_API_BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="

def welcome
    # welcome the user
    puts "Welcome to our book searcher:"
end

def get_search_terms
    puts "What would you like to search for?"
    search_terms = gets.chomp
    return search_terms
end

def construct_url(search_terms)
    # construct a search URL from user-inputted search terms
    # returns url formatted to query Google Books API
    search_terms.gsub!(" ", "+")
    # search_terms = search_terms.gsub(" ", "+")
    url = GOOGLE_BOOKS_API_BASE_URL + search_terms
    return url
end

def get_book_info(url)
    # make a request to the google book api
    # returns json of results
    response = RestClient.get(url)
    return JSON.parse(response)
end

def parse_response(response)
    # return an array of hashes of first ten title/author/description
    # [{title: "something", authors, "someone", description: "about stuff"}, {}, {}]
    first_ten = response["items"][0..9]
    book_hashes = first_ten.map do |book_hash|
        {title: book_hash["volumeInfo"]["title"],
         authors: book_hash["volumeInfo"]["authors"],
         description: book_hash["volumeInfo"]["description"]}
    end
end

def display_info(book_info)
    book_info.each do |book|
        puts "Title: #{book[:title]}"
        puts "Authors: #{book[:authors].join(" & ")}"
        puts "Description: #{book[:description]}"
        puts "*********\n\n"
    end
end

def main
    welcome()
    search_words = get_search_terms()
    url = construct_url(search_words)
    response = get_book_info(url)
    book_info = parse_response(response)
    display_info(book_info)
end

main
# parse the response into json format
# print the author/title/description of first ten books



# response = RestClient.get('www.reddit.com/r/awww/.json')
# binding.pry
# json_info = JSON.parse(response)
# binding.pry
# # json_info.each do |thingie|
# #     puts thingie[:title]
# # end





# #Reddit's computers (API)

# # every time we receive a request
# # parse_request(request) => r/awww
# # look in database for r/aww posts
# # send them back to the user