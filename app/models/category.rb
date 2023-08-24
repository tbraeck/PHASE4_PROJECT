class Category < ApplicationRecord
    has_many :drawings, dependent: :destroy
    has_many :users, through: :drawings
end
