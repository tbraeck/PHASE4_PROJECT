class User < ApplicationRecord
    has_many :drawings
    has_many :categories, through: :drawings
    has_many :user_drawings

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
end
