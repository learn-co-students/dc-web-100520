class Doctor < ActiveRecord::Base 

    belongs_to :hospital
    has_many :doctor_patients
    has_many(:patients, {through: :doctor_patients})

    def self.print_all_doctor_names
        Doctor.all.each do |doctor|
            puts doctor.name 
        end
        return nil
    end
end