class User < ApplicationRecord
    has_many :drawings, through: :categories
    has_many :categories, through: :drawings
    has_many :user_drawings

    has_secure_password

    validates :username, presence: true, uniqueness: true
<<<<<<< HEAD
    validates :password, presence: true
=======
    validates :password, length: { minimum: 8}
    
>>>>>>> new-name/Tate-Main
end


