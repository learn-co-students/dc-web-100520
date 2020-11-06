class Restaurant < ApplicationRecord
    has_many :tacos

    validates :name, presence: true, uniqueness: {case_sensitive: false}
    validates :city, presence: true
    
end
