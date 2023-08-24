class CategoryWithDrawingsSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_many :drawings 
end
