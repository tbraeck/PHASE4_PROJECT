class DrawingSerializer < ActiveModel::Serializer
  attributes :id, :adjective, :noun, :verb, :adverb

  has_one :user
  has_one :category
end
