class Category < ApplicationRecord
    has_many :drawings, dependent: :destroy
    has_many :users, through: :drawings
    has_many :user_drawings

    validates :name, presence: true
    validates :description, presence: true
    validates :drawings, presence: true
end

