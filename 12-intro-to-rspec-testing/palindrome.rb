require 'pry'

class PalindromeChecker

    def is_palindrome?(word)
        # initial_positions_to_check = 0...word.length
        # (initial_positions_to_check).each do |index|
        #     matching_index = word.length - index - 1 
        #     binding.pry
        #     if word[index] != word[matching_index]
        #         return false
        #     end
        # end
        # return true

        if word.length <= 1
            return true
        else
            if word[0] == word[-1]
                inner_word = word[1...-1]
                return is_palindrome?(inner_word)
            else
                return false
            end
        end
    end



end
checker = PalindromeChecker.new

puts checker.is_palindrome?("a b b a") == true
# look at first letter matches last letter?
# keep going letter by letter to see if it matches corresponding from end

puts checker.is_palindrome?("t a c o c a t") == true
    
                0123
puts checker.is_palindrome?("banana") == false
puts checker.is_palindrome?("Abba") == false 
puts checker.is_palindrome?("race car") == false
puts checker.is_palindrome?("race.car") == false