class Taco < ApplicationRecord

    validates :price, :vegetarian, presence: true
    validates :name, presence: true, uniqueness: {case_sensitive: false}
    validate :tacos_cant_start_with_b
    validate :vegetarian_tacos_are_cheap

    belongs_to :restaurant, optional: true
    
    def tacos_cant_start_with_b
        # if the taco's name starts with b

        # add an error to this taco's error
        if self.name.downcase.starts_with?('b')
            self.errors.add(:name, "can't start with the letter 'b'")
        end 
    end

    def vegetarian_tacos_are_cheap
        if self.vegetarian && self.price && self.price > 10
            errors.add(:price, "must be below ten dollars for a veggie taco")
        end
    end

    def self.veggie
        return Taco.where(vegetarian: true)
    end

    def self.meat
        return Taco.where(vegetarian: false)
    end
end
