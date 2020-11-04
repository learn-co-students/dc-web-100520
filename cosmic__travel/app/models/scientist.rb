class Scientist < ApplicationRecord
    has_many :missions
    has_many(:planets, {through: :missions})
    
    validates :name, uniqueness: {case_sensitive: false}, presence: true
    validates :field_of_study, presence: true
    
    def last_name
        self.name.split(" ")[-1]
    end
end
