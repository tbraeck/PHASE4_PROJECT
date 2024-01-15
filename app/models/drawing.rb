class Drawing < ApplicationRecord
    belongs_to :category
    belongs_to :user
<<<<<<< HEAD
   
=======

>>>>>>> new-name/Tate-Main
    validates :adjective, presence: true
    validates :noun, presence: true
    validates :verb, presence: true
    validates :adverb, presence: true
end
<<<<<<< HEAD
    
=======


>>>>>>> new-name/Tate-Main
