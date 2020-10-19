require 'pry'

Doctor.destroy_all
Hospital.destroy_all
Patient.destroy_all

sacred_heart = Hospital.find_or_create_by(name: "Sacred Heart")
jd = Doctor.find_or_create_by(name: "John Dorian", specialty: "Internal Medicine", hospital_id: sacred_heart.id)
turk = Doctor.find_or_create_by(name: "Chris Turk", specialty: "Surgery", hospital: sacred_heart)
elliot = Doctor.find_or_create_by(name: "Elliot Reid", specialty: "Endocrinology", hospital_id: sacred_heart.id)

wilke = Patient.find_or_create_by(name: "Mrs Wilke")
johnny = Patient.find_or_create_by(name: "Johnny the Tackling Alzheimer's Patient")
jd1 = Patient.find_or_create_by(name: "JD Number 1")