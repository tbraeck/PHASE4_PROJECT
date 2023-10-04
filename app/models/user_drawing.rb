class UserDrawing < ApplicationRecord
  belongs_to :user

    validates :adjective, presence: true
    validates :noun, presence: true
    validates :verb, presence: true
    validates :adverb, presence: true
end
