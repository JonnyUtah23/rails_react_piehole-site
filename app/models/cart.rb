class Cart < ApplicationRecord
  has_many :orders
  has_many :items, through: :orders
end
