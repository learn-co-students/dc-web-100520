class Taco < ApplicationRecord

    belongs_to :restaurant
    
    def self.veggie
        return Taco.where(vegetarian: true)
    end

    def self.meat
        return Taco.where(vegetarian: false)
    end
end
